import { motion as m } from 'framer-motion'
import { contain, item } from "@/components/animations"

export default function Footer(){
    return (
        <div className="p-3">
            <div className="flex justify-between max-w-[85%]">
                <div className="font-medium">
                    <h1>magicaster.co STUDIO</h1>
                    <h1>joisvvv@hotmail.com</h1>
                </div>
                <div className="font-medium underline text-sm">
                    <m.ul variants={contain} initial="hidden" animate="show">
                        <div className="overflow-hidden">
                            <m.li variants={item} className="pb-1"><a href='https://github.com/joisv'>github</a></m.li>
                        </div>
                        <div className="overflow-hidden">
                            <m.li variants={item} className="pb-1">linkedIn</m.li>
                        </div>
                        <div className="overflow-hidden">
                            <m.li variants={item} className="pb-1">instagram</m.li>
                        </div>
                        <div className="overflow-hidden">
                            <m.li variants={item} className="pb-1">facebook</m.li>
                        </div>
                    </m.ul>
                </div>
            </div>
        </div>

    )
}