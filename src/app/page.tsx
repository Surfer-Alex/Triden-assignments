import Navigation from '@/components/Navigation';
import Image from 'next/image';
import bannerMaterial from '@/assets/bird.png';
import decor from '@/assets/Decor.png';
export default function Home() {
  return (
    <main className="flex flex-col xl:flex-row ">
      <Navigation />
      <div className="flex flex-col	bg-slate-400 grow h-screen">
        <div className="relative h-auto">
          <Image
            quality={100}
            priority={true}
            src={bannerMaterial}
            alt="Picture of the bird"
            objectPosition="center"
            className="object-cover w-full min-h-[311.4px]"
          />
          <div className="absolute text-white flex flex-col right-[22.67px] bottom-[24.07px] md:bottom-[36.85px] md:right-[44.75px]">
            <div className="font-bold w-[285.28px] lg:w-auto text-end self-end text-[48px] leading-[50px] lg:leading-[65.38px] ">
              白頭翁 (Chinese bulbul)
            </div>
            <div className="font-normal  w-[329.67px] lg:w-auto text-[18px] mt-[9.35px] lg:mt-1 leading-[24.52px]">
              又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約
              8~10 年。
            </div>
          </div>
        </div>
        <div className="bg-[#DCCCBC] w-full px-[36.38px] grow">
          <div className="flex flex-col items-center lg:items-start lg:flex-row text-black justify-center mt-[58.15px]  lg:px-[50.74px] gap-y-[50.5px] lg:gap-[60px] xl:gap-[79px]">
            {[
              [
                '外觀',
                '白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。',
              ],
              [
                '棲地',
                '白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。',
              ],
              [
                '食性',
                '以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。',
              ],
            ].map(([title, content], idx) => (
              <div key={idx} className="flex w-full lg:w-[33%] pl-[5px]">
                <div className="relative font-bold text-[36px] leading-[40px]">
                  {title}
                  <Image
                    quality={100}
                    priority={true}
                    src={decor}
                    alt="Picture of the bird"
                    className="absolute left-[26.94px] top-[66.58px] "
                  />
                </div>
                <div className="font-normal text-[16px] leading-[21.79px] ml-[37.84px]">
                  {content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
