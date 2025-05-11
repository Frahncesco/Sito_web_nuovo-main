import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Info, Recycle, Clock, Leaf } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Product } from "./ProductsData";

interface ProductCardProps {
  product: Product;
  alwaysShowDetails?: boolean;
}

const ProductCard = ({ product, alwaysShowDetails = false }: ProductCardProps) => {
  const {
    name,
    description,
    image,
    sustainabilityScore,
    materials,
    lifespan,
    recyclable,
  } = product;

  const [isHovered, setIsHovered] = useState(false); // Per hover su desktop
  const [isMobile, setIsMobile] = useState(false);   // Per rilevare dispositivi mobili
  const [isExpanded, setIsExpanded] = useState(false); // Per toggle su mobile/tablet

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsExpanded(false); // Reset espansione su desktop
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsExpanded((prev) => !prev);
    }
  };

  const showDetails = alwaysShowDetails || (isMobile ? isExpanded : isHovered);

  return (
    <div className="relative bg-white group">
      <motion.div
        className="relative w-full h-full cursor-pointer"
        whileHover={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={handleClick}
      >
        <Card className="overflow-hidden border border-gray-100 h-full">
          <div className="relative aspect-square overflow-hidden bg-gray-50">
            <motion.img
              src={image}
              alt={name}
              className="object-cover w-full h-full"
              style={{ maxWidth: isMobile ? "100%" : "auto" }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute top-3 right-3">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 hover:bg-green-200"
              >
                {sustainabilityScore}/100
              </Badge>
            </div>
          </div>

          <CardContent className="p-4">
            <h3 className="font-medium text-lg mb-1">{name}</h3>
            <p className="text-sm text-gray-600 mb-2">{description}</p>

            {/* Caratteristiche: visibili solo in hover (desktop) o click (mobile) */}
            <div
              className={`mt-3 pt-3 border-t border-gray-100 transition-all duration-300 ${
                showDetails ? "block" : "hidden"
              }`}
            >
              <div className="grid grid-cols-2 gap-2 text-xs">
                <TooltipProvider>
                  <div className="flex items-center gap-1">
                    <Tooltip>
                      <TooltipTrigger>
                        <Leaf className="h-4 w-4 text-green-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Materials used in production</p>
                      </TooltipContent>
                    </Tooltip>
                    <span className="text-gray-700">{materials.join(", ")}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Tooltip>
                      <TooltipTrigger>
                        <Clock className="h-4 w-4 text-amber-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Expected product lifespan</p>
                      </TooltipContent>
                    </Tooltip>
                    <span className="text-gray-700">{lifespan}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Tooltip>
                      <TooltipTrigger>
                        <Recycle className="h-4 w-4 text-blue-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Is this product recyclable?</p>
                      </TooltipContent>
                    </Tooltip>
                    <span className="text-gray-700">
                      {recyclable ? "Yes" : "No"}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-4 w-4 text-gray-600" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Click to learn more</p>
                      </TooltipContent>
                    </Tooltip>
                    <span className="text-gray-500 italic">More info</span>
                  </div>
                </TooltipProvider>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProductCard;