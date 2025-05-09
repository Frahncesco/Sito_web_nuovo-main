// src/components/ProductCard.tsx

import React, { useState } from "react";
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
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {
    name,
    description,
    image,
    sustainabilityScore,
    materials,
    lifespan,
    recyclable,
  } = product;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative bg-white">
      <motion.div
        className="relative w-full h-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="overflow-hidden border border-gray-100 h-full">
          <div className="relative aspect-square overflow-hidden bg-gray-50">
            <motion.img
              src={image}
              alt={name}
              className="object-cover w-full h-full"
              animate={
                isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
              }
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

            <motion.div
              className="mt-3 pt-3 border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={
                isHovered
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 0, height: 0 }
              }
              transition={{ duration: 0.3 }}
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
                    <span className="text-gray-700">
                      {materials.join(", ")}
                    </span>
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
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ProductCard;