import { sizes } from "@/lib/definitions";
import React, { Fragment } from "react";
import { DirectionAwareHover } from "./direction-aware-hover";
import Link from "next/link";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export default function SizeCard({
  sizes,
  title,
  btnClassName,
}: {
  sizes: sizes[];
  title: string;
  btnClassName?: string;
}) {
  return (
    <>
      {sizes.map(({ size, houseSize, inverter, system, image }, idx) => (
        <Fragment key={idx}>
          <div className="bg-neutral-100 rounded-md">
            <div className="relative flex items-center justify-center">
              <DirectionAwareHover imageUrl={image}>
                <p className="font-bold text-xl">Something Faltu</p>
                <p className="font-normal text-sm">Description of Faltu</p>
              </DirectionAwareHover>
            </div>
            <div className="px-4 space-y-2 pb-4">
              <h4 className="mt-2 capitalize font-bold text-xl text-black">
                {title} - {size}
              </h4>
              <p>{houseSize}</p>
              {inverter && (
                <p>
                  Inverter <strong>{inverter}</strong>
                </p>
              )}
              {system && (
                <p>
                  System <strong>{system}</strong>
                </p>
              )}
              <div className="flex justify-center md:justify-start items-center">
                <Link href={"#"}>
                  <Button
                    variant={"default"}
                    className={cn("bg-green-500 hover:bg-green-600", btnClassName)}
                  >
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
}
