import Image from 'next/image';
import { React } from 'react';

function FooterBanner () {
    return (
        <div className="relative w-full mt-5">
            <Image
                src='/time-banner.png'
                alt='예배시간 이미지'
                layout='responsive'
                width={16}
                height={90}
            />
            <div className="flex flex-row w-full h-40 bg-gray-500">
                <div className="w-96 my-auto ml-48">
                <Image 
                    src='/footer-logo.png'
                    alt='푸터 로고'
                    layout='responsive'
                    width={16}
                    height={10}
                />
                </div>
                <div className="flex justify-between w-7/12">
                    <div className="flex flex-col text-white text-sm my-auto">
                        <p>교회주소 : 경기도 성남시 중원구 도촌남로 22 (LH 동분당 센트럴파크)상가 2층</p>
                        <p>이메일 : wayto91@gmail.com</p>
                        <p>전화 : 031-751-3804</p>
                        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4 text-white text-sm mt-9">
                            <p>개인정보 처리방침</p>
                            <p>|</p>
                            <p>이용약관</p>
                            <p>|</p>
                            <p>사이트맵</p>
                        </div>
                        <div className="flex justify-end gap-3">
                            <Image 
                                src='/facebook-brands-solid.svg'
                                alt='페이스북 이미지'
                                width={30}
                                height={10}
                            />
                            <Image 
                                src='/youtube-brands-solid.svg'
                                alt='페이스북 이미지'
                                width={30}
                                height={10}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FooterBanner;