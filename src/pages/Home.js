import { Carousel } from "flowbite-react";
import CategoryInicator from "../components/CategoryInicator";
import CategorySection from "../components/CategorySection";
import Separator from "../components/Separator";
import { Products } from "../data/products";
export default function Home() {
  return (
    <div className="mt-40 ">
      <div className="mx-auto mt-20 w-full sm:w-11/12 xl:w-9/12 2xl:w-7/12">
        <div className="flex flex-row flex-nowrap items-center  justify-between overflow-x-auto overflow-y-hidden">
          <CategoryInicator
            imgSRC="https://media.zid.store/cdn-cgi/image/w=235,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/e0b92311-6bc6-4ea1-8f3b-713a0fe15706-260x260.jpg"
            title="العناية بالبشرة"
          />
          <CategoryInicator
            imgSRC="https://media.zid.store/cdn-cgi/image/w=235,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/050701ef-7713-458d-9617-7c348d99843e-260x260.jpg"
            title="العناية بالشعر"
          />
          <CategoryInicator
            imgSRC="https://media.zid.store/cdn-cgi/image/w=235,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/16e64762-53b0-4abb-98e3-4ec7efdf59f1-260x260.jpg"
            title="العناية اليومية"
          />
          <CategoryInicator
            imgSRC="https://media.zid.store/cdn-cgi/image/w=235,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/0e2a605c-c6da-4500-b375-ebdaea179074-260x260.jpg"
            title="العناية بالجسم"
          />
          <CategoryInicator
            imgSRC="https://media.zid.store/cdn-cgi/image/w=235,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/8838476b-b7a5-4cec-8f4e-61e43541304d-260x260.jpg"
            title="المكياج و الاكسسوارات"
          />
        </div>
        <div className="mt-10 h-64 sm:h-80 xl:h-96 2xl:h-128" dir="ltr">
          <Carousel slideInterval={5000}>
            <button className="h-full w-full">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1010,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/8b950504-46e4-4069-8181-e9abc63c7576.jpg"
                alt="..."
              />
            </button>
            <button className="h-full w-full">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/ab2131fa-faaa-4aab-aa2e-a0546b23f955.jpg"
                alt="..."
              />
            </button>
            <button className="h-full w-full">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/51061311-a803-4a8e-b282-e36f4771da38.jpg"
                alt="..."
              />
            </button>
            <button className="h-full w-full">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/3b636eb7-1721-4d82-94c7-73b676d64a8a.jpg"
                alt="..."
              />
            </button>
          </Carousel>
        </div>
        <div className="mt-10 flex flex-row items-center justify-between">
          <div
            className="h-44 sm:h-48 md:h-64 lg:h-96  xl:h-128"
            style={{ width: "46%" }}
          >
            <button className="relative h-full w-full ">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=850,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/fffe482a-f541-4889-8e1c-3e57f55bd768.jpg"
                alt="..."
              />
            </button>
          </div>
          <div
            className="h-44 sm:h-48 md:h-64 lg:h-96  xl:h-128"
            style={{ width: "46%" }}
          >
            <button className="relative h-full w-full ">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=850,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/d8e650a9-c822-4e79-83ff-c5b45c287cb6.jpg"
                alt="..."
              />
            </button>
          </div>
        </div>
        <div className="my-10 h-64 sm:h-80 xl:h-96 2xl:h-128" dir="ltr">
          <Carousel slideInterval={10000}>
            <button className="h-full w-full">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/93384f65-6742-49b0-afc7-1133e92a01d8.png"
                alt="..."
              />
            </button>
            <button className="h-full w-full">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/d9990ce3-335c-4d06-afa6-fd3dd42fe61e.jpg"
                alt="..."
              />
            </button>
            <button className="h-full w-full">
              <img
                className="object-contain"
                objectFit="contain"
                layout="fill"
                src="https://media.zid.store/cdn-cgi/image/w=1300,q=85,f=auto/https://media.zid.store/4c4bc3af-e1aa-43ea-aab7-eeeb6bc4f5dc/4cc30905-d5cb-4467-8283-0ecfde2bb3b2.jpg"
                alt="..."
              />
            </button>
          </Carousel>
        </div>
      </div>
      <Separator />
      <div className="mx-auto mt-20 w-full sm:w-11/12 xl:w-9/12 2xl:w-7/12">
        <CategorySection title="أسعار مميزة" products={Products.slice(0, 10)} />
      </div>
      <div className="mx-auto mt-20 w-full sm:w-11/12 xl:w-9/12 2xl:w-7/12">
        <CategorySection
          title="عروض لي مور"
          products={Products.slice(0, 10)}
        />
      </div>
      <div className="mx-auto mt-20 w-full sm:w-11/12 xl:w-9/12 2xl:w-7/12">
        <CategorySection
          title="الأفضل مبيعاً"
          products={Products.slice(0, 10)}
        />
      </div>
    </div>
  );
}
