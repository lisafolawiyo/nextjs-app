import { CallIcon, DeliveryBox, ProfileGuy } from '@/components/Icons';

export default function ShoppingExperience() {
  return (
    <section className="pb-16 md:pb-32 px-4 bg-white">
      <div className=" mx-auto">
        <h2 className="text-center text-xl md:text-[40px] font-normal mb-16 tracking-wider uppercase">
          THE LISA FOLAWIYO SHOPPING EXPERIENCE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 md:size-[65px]  rounded-full border border-black flex items-center justify-center mb-6">
              <DeliveryBox />
            </div>
            <h3 className="text-base md:text-[32px] font-normal mb-3">
              Delivery & Returns
            </h3>
            <p className="text-sm md:text-[20px] font-light leading-relaxed">
              We offer delivery
              <br />
              and returns on all online orders.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 md:size-[65px]  rounded-full border border-black flex items-center justify-center mb-6">
              <ProfileGuy />
            </div>
            <h3 className="text-base md:text-[32px]  font-normal mb-3">
              Lisa Folawiyo at your service
            </h3>
            <p className="text-sm md:text-[20px] font-light leading-relaxed">
              Our customer care experts are ready
              <br />
              to serve you
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 md:size-[65px] rounded-full border border-black flex items-center justify-center mb-6">
              <CallIcon />
            </div>
            <h3 className="text-base md:text-[32px]  font-normal mb-3">
              Contact us
            </h3>
            <p className="text-sm md:text-[20px] font-light leading-relaxed">
              You can reach us via
              <br />
              info@lisafolawiyo.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
