import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import NavBar from './layout/nav';

const Error = () => {

    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

    const [home, setHome] = useState(
        [
            { name: "เกี่ยวกับเรา", href: "/index/about" },
            { name: "สังคมผู้สูงอายุ", href: "/index/society" },
            { name: "เบี้ยยังชีพ", href: "/index/allowance" },
            { name: "ติดต่อ", href: "/index/contact" },
            { name: "เข้าสู่หน้าหลัก", href: "/main" }
        ]
    )

    const [homeMin, setHomeMin] = useState(
        [
            { name: "เกี่ยวกับเรา", href: "/index/about" },
            { name: "สังคมผู้สูงอายุ", href: "/index/society" },
            { name: "เบี้ยยังชีพ", href: "/index/allowance" },
            { name: "ติดต่อ", href: "/index/contact" },
            { name: "เข้าสู่หน้าหลัก", href: "/main" }
        ]
    )

    return (
        <div className="warp-empty">
            <NavBar name="empty" tab={isSmallScreen ? homeMin : home} />
            <div className="content-empty">
                <img src="/static/empty.jpg" alt="empty" />
                <div className="title-empty">
                    <h4>หน้ายังไม่พร้อมใช้งาน โปรดกลับสู่หน้าหลัก</h4>
                </div>
            </div>
            <Link href="/">
                <h5>หน้าหลัก</h5>
            </Link>
        </div>
    )
}
export default Error;