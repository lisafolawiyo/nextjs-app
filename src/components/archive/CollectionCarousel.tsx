'use client';

import { useEffect, useMemo, useState } from 'react';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

import { useGsapFadeIn } from '@/hooks/useGsapFadeIn';

// import { getProducts } from '@/actions/woocommerce/products';

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface CollectionCarouselProps {
  initialProducts?: UnknownObject[];
  categories?: Category[];
}

const ImageSkeleton = () => (
  <div className="w-full flex-shrink-0 md:w-1/2">
    <div className="flex h-full w-full flex-col px-4 pt-4 md:px-10 md:pt-10">
      <div className="relative overflow-hidden bg-white">
        <div className="h-[530px] w-full animate-pulse bg-gray-200" />
      </div>
    </div>
  </div>
);

const images = {
  AW13: [
    'https://res.cloudinary.com/aiyeola/image/upload/v1763011513/lisa-folawiyo/AW13/40_diymb4.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763011530/lisa-folawiyo/AW13/IMG_6842_eppqu3.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763011530/lisa-folawiyo/AW13/IMG_6844_vt7vuj.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763011529/lisa-folawiyo/AW13/IMG_6840_u0ftfz.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763011528/lisa-folawiyo/AW13/IMG_6834_aodmw2.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763011528/lisa-folawiyo/AW13/2012-_Vintage_Love___Jewel_By_Lisa_SpringSummer2012_4_sjgqly.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763011527/lisa-folawiyo/AW13/2012-_Vintage_Love___Jewel_By_Lisa_SpringSummer2012_3_papi9w.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036120/lisa-folawiyo/AW13/IMG_6845_tuafvj.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036120/lisa-folawiyo/AW13/IMG_6847_mgrl4e.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036120/lisa-folawiyo/AW13/IMG_6850_etvxox.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036120/lisa-folawiyo/AW13/IMG_6848_tntz1o.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036121/lisa-folawiyo/AW13/IMG_6849_yea8rs.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036121/lisa-folawiyo/AW13/IMG_6846_e5bfxc.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036133/lisa-folawiyo/AW13/2012-_Vintage_Love___Jewel_By_Lisa_SpringSummer2012_2_ln5mwy.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036134/lisa-folawiyo/AW13/2012-_Vintage_Love___Jewel_By_Lisa_SpringSummer2012_1_sv6mt2.jpg',
  ],
  'FALL 2015': [
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013018/lisa-folawiyo/FALL%202015/22_yhbpx1.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013028/lisa-folawiyo/FALL%202015/720a67bd-02ec-4d0e-a096-49ec673040ba_zkfrx7.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013028/lisa-folawiyo/FALL%202015/38bac5cd-ab20-48cd-ad52-2abcfa4079e5_onox8h.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013027/lisa-folawiyo/FALL%202015/47bdd453-9f74-49f4-839a-3f5d835ca38c_cw1n2z.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013027/lisa-folawiyo/FALL%202015/70e74191-edb6-4d01-9837-4cff3259fd65_tpgil2.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013028/lisa-folawiyo/FALL%202015/1e3dffbc-ef03-4ce2-95be-96e709348ca6_e7spth.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036237/lisa-folawiyo/FALL%202015/2014-SpringSummer_1_xpklsn.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036243/lisa-folawiyo/FALL%202015/b1067417-95ab-432e-ac1b-21335dfbd7e7_lzbqan.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036243/lisa-folawiyo/FALL%202015/d74d7d0c-85ee-469d-aa8b-a9b3ccb161e9_po3mtm.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036244/lisa-folawiyo/FALL%202015/bab2f13f-d877-4273-bacb-cd2f406d99c8_dq2kkm.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036244/lisa-folawiyo/FALL%202015/ce804cdc-2588-425a-83d8-c479e693ca16_fihl05.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036267/lisa-folawiyo/FALL%202015/2015_2_sywifi.png',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036271/lisa-folawiyo/FALL%202015/2015_3_ds9noj.png',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036260/lisa-folawiyo/FALL%202015/2015_4_ozjy4q.png',
  ],
  SS17: [
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013264/lisa-folawiyo/SS17/42_pnzpb0.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013269/lisa-folawiyo/SS17/d6a0d46d-bccd-4191-8e44-5521d765302f_1_akco8d.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013270/lisa-folawiyo/SS17/57d5961f-808c-4544-b78e-9c0d72750c5e_gwpjaf.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013271/lisa-folawiyo/SS17/1fa7fdda-e217-4078-b999-28f710e857f1_nh3vzl.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013273/lisa-folawiyo/SS17/9c5cd47b-d875-41ff-b9a2-d26c549be399_grudta.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013273/lisa-folawiyo/SS17/42aefa40-8893-49b2-8b3d-6e564f6daf68_zbd3xn.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036274/lisa-folawiyo/SS17/57d5961f-808c-4544-b78e-9c0d72750c5e_r8s1qb.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036274/lisa-folawiyo/SS17/83df31a3-f6ae-4f76-a7e3-3a4806bc1e26_bzaqbk.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036275/lisa-folawiyo/SS17/a57f76ce-f89c-4439-9d7e-29442408b7b2_dkffvf.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036276/lisa-folawiyo/SS17/d4d6338e-5e66-4336-a0a4-7bb676cd8c10_d7ygxb.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036276/lisa-folawiyo/SS17/a9286515-85b1-471e-abde-cccc24a3a399_ngn1lu.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036277/lisa-folawiyo/SS17/ff1d05cd-69a4-4565-b398-ac628e7aab15_yhdbb1.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036277/lisa-folawiyo/SS17/333bcb1f-0247-4874-b4fa-95c60597cf32_tk1izo.jpg',
  ],
  AW18: [
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013073/lisa-folawiyo/AW18/12_boqxaw.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013084/lisa-folawiyo/AW18/0d7f3a02-3c28-4e58-8f09-4a4b5de6a12f_tz4xgg.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013085/lisa-folawiyo/AW18/e93386ee-8c3e-4ba7-a83f-b61bfef19bb0_1_o7v2iz.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013085/lisa-folawiyo/AW18/49e111d6-c179-45f9-845c-0de4590eb5ac_frrght.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013086/lisa-folawiyo/AW18/4df7550a-451c-42a8-861b-ee84a51de1cc_1_cvebly.jpg',
  ],
  SS18: [
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013305/lisa-folawiyo/SS18/33_usj5in.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013360/lisa-folawiyo/SS18/26_bp5ire.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013395/lisa-folawiyo/SS18/27_ej6toc.jpg',
  ],
  SS19: [
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013432/lisa-folawiyo/SS19/6_ggph8d.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013443/lisa-folawiyo/SS19/a10a9d80-86a8-4006-a0ea-22bb19ce936b_ln2jwf.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013444/lisa-folawiyo/SS19/68c83ac1-7541-4e3c-9812-2cb8931259e5_zxm0lz.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013445/lisa-folawiyo/SS19/8a1986f6-f181-42d2-b821-254820a08a8f_1_ahyhxi.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013447/lisa-folawiyo/SS19/8fe8304b-8e2b-418c-ac8f-5736a51c6271_md0mht.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013448/lisa-folawiyo/SS19/bc2becc3-702b-4a53-90fa-41b4724308cb_eabq7x.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036366/lisa-folawiyo/SS19/e4f0ca87-5731-4b1e-bb62-82ca8a25256b_pqluts.jpg',
  ],
  SS21: [
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013498/lisa-folawiyo/SS21/13_v5wvng.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013505/lisa-folawiyo/SS21/2fa07f0b-cb25-4b00-a59d-7954ee86bb5b_n91zad.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013507/lisa-folawiyo/SS21/8f7fea9c-c3fa-4020-a870-4f75056f8794_onh2ih.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013508/lisa-folawiyo/SS21/3e9dbda4-533f-4a01-9e49-77206e2151c3_t3heyy.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013525/lisa-folawiyo/SS21/5d618b51-df2a-47fe-a580-b4fc4cfeb26e_c7fszz.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013511/lisa-folawiyo/SS21/0d659d3e-09bc-48da-91c7-ab1fe56c5fd9_dbstus.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036366/lisa-folawiyo/SS19/e4f0ca87-5731-4b1e-bb62-82ca8a25256b_pqluts.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036427/lisa-folawiyo/SS21/b0fbf833-c8f4-45dc-b40f-6c9f387e474e_taqhmj.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036427/lisa-folawiyo/SS21/56299ccd-9a6b-43c0-b11c-3349cae48fd4_mygjx0.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036429/lisa-folawiyo/SS21/533484f2-af9e-40ba-b6d1-984981abeb23_lrbyv5.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036429/lisa-folawiyo/SS21/dd6f5c10-2ccb-4098-a3cb-8937bcef1b10_sov5c5.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036430/lisa-folawiyo/SS21/c5394dc7-516b-49a3-9ee9-bbaf1cd5151c_j6c1ax.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763036431/lisa-folawiyo/SS21/c8e5b148-309d-467a-baac-dfe18e54030f_ajbrwa.jpg',
  ],
  SS22: [
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013534/lisa-folawiyo/SS22/32_pnhzjv.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763019970/lisa-folawiyo/SS22/Copy_of_YJ7A1451-Edit_lidtcp.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763019970/lisa-folawiyo/SS22/Copy_of_YJ7A1375-Edit_uz91ws.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763019970/lisa-folawiyo/SS22/Copy_of_YJ7A1567-Edit_bwam8l.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763019974/lisa-folawiyo/SS22/Copy_of_YJ7A1378-Edit_jxacu0.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020015/lisa-folawiyo/SS22/Copy_of_YJ7A1563-Edit_ojnac2.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037971/lisa-folawiyo/SS22/Copy_of_YJ7A1404-Edit_cklmft.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037973/lisa-folawiyo/SS22/Copy_of_YJ7A1451-Edit_tfvvm8.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037974/lisa-folawiyo/SS22/Copy_of_YJ7A1398-Edit_grajeu.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037976/lisa-folawiyo/SS22/Copy_of_YJ7A1505-Edit_jdvhyh.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037977/lisa-folawiyo/SS22/Copy_of_YJ7A1453-Edit_cgbtas.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037979/lisa-folawiyo/SS22/Copy_of_YJ7A1492-Edit_ya0fkg.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037979/lisa-folawiyo/SS22/Copy_of_YJ7A1496-Edit_tsolm4.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037981/lisa-folawiyo/SS22/Copy_of_YJ7A1470-Edit_jjezsn.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037982/lisa-folawiyo/SS22/Copy_of_YJ7A1508-Edit_tuytfv.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037985/lisa-folawiyo/SS22/Copy_of_YJ7A1464-Edit_pygnhk.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037985/lisa-folawiyo/SS22/Copy_of_YJ7A1448-Edit_uiqrry.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037988/lisa-folawiyo/SS22/Copy_of_YJ7A1456-Edit_ud46yx.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763037989/lisa-folawiyo/SS22/Copy_of_YJ7A1484-Edit_b5redn.jpg',
  ],
  SS23: [
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013686/lisa-folawiyo/SS23/28_r9jqk2.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020500/lisa-folawiyo/SS23/IMGM8788_e5zvyl.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020506/lisa-folawiyo/SS23/IMG_3980_hmqfos.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020517/lisa-folawiyo/SS23/IMG_2604_kuokp3.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020517/lisa-folawiyo/SS23/IMGL8292_sapba9.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038309/lisa-folawiyo/SS23/1D0A0074_copy_vhgh6u.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038313/lisa-folawiyo/SS23/1D0A0012_copy_1_xtip1j.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038313/lisa-folawiyo/SS23/4b9a5165_crwdgw.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038315/lisa-folawiyo/SS23/1D0A0388_poa8lq.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038315/lisa-folawiyo/SS23/1D0A0015_kjmzkf.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038318/lisa-folawiyo/SS23/1D0A0330_fv9otf.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038329/lisa-folawiyo/SS23/1D0A0275_1_xhknev.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038331/lisa-folawiyo/SS23/IMGL8245_mvhjjc.jpg',
  ],
  SS24: [
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013795/lisa-folawiyo/SS24/39_anooz7.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020636/lisa-folawiyo/SS24/Image_30_z1qhpk.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020637/lisa-folawiyo/SS24/Image_31_n8xy31.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020638/lisa-folawiyo/SS24/Image_36_eqooy1.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020639/lisa-folawiyo/SS24/Image_29_ytitq4.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038930/lisa-folawiyo/SS24/Image_40_zfl8x0.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038958/lisa-folawiyo/SS24/Image_25_dfiqhu.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038961/lisa-folawiyo/SS24/Image_20_o4dkjm.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038965/lisa-folawiyo/SS24/Image_27_lzbekg.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038967/lisa-folawiyo/SS24/Image_29_kznavb.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038973/lisa-folawiyo/SS24/Image_35_ndd30v.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038982/lisa-folawiyo/SS24/Image_21_celfdx.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038984/lisa-folawiyo/SS24/Image_31_txlvc9.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763038986/lisa-folawiyo/SS24/Image_18_ct30x9.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763039010/lisa-folawiyo/SS24/Image_24_jhr9jf.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763039012/lisa-folawiyo/SS24/Image_22_p84e2q.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763039028/lisa-folawiyo/SS24/Image_34_g1qx0c.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763039057/lisa-folawiyo/SS24/Image_32_nlkoau.jpg',
  ],
  SS25: [
    'https://res.cloudinary.com/aiyeola/image/upload/v1763013856/lisa-folawiyo/SS25/24_yy8iox.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020782/lisa-folawiyo/SS25/1I5A7125_bd7keq.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020798/lisa-folawiyo/SS25/1I5A7047_zypb31.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020800/lisa-folawiyo/SS25/1I5A7030_hofvm0.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763020806/lisa-folawiyo/SS25/1I5A7164_ovjym6.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763039119/lisa-folawiyo/SS25/1I5A7066_vocla3.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763039131/lisa-folawiyo/SS25/1I5A7081_ciikme.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763039132/lisa-folawiyo/SS25/1I5A7082_ebz0se.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763039138/lisa-folawiyo/SS25/1I5A7073_ij0w4u.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763039158/lisa-folawiyo/SS25/1I5A7075_y0dsou.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763039162/lisa-folawiyo/SS25/1I5A7078_avzglq.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763049154/lisa-folawiyo/SS25/1I5A3781_nqnkkp.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763049155/lisa-folawiyo/SS25/1I5A3847_ndsq3h.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763049156/lisa-folawiyo/SS25/1I5A3916_x6byco.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763049158/lisa-folawiyo/SS25/IMG_0038_tmmhuj.jpg',
    'https://res.cloudinary.com/aiyeola/image/upload/v1763049160/lisa-folawiyo/SS25/1I5A3876_sp8tn4.jpg',
  ],
};

export const CollectionCarousel = (
  {
    // initialProducts,
    // categories,
  }: CollectionCarouselProps,
) => {
  const sectionRef = useGsapFadeIn({ delay: 0.3, y: 30 });

  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    [],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', duration: 40, dragFree: true },
    [autoplayPlugin, WheelGesturesPlugin()],
  );

  // Define the exact order and allowed categories
  // const allowedCategoryOrder = [
  //   'AW18',
  //   'SS12',
  //   'SS15',
  //   'SS17',
  //   'SS20',
  //   'SS21',
  //   'SS22',
  //   'SS23',
  //   'SS24',
  //   'COLL 1 2023',
  //   'COLL 1 2024',
  //   'COLL 1 2025',
  // ];

  const categories = [
    'AW13',
    'FALL 2015',
    'SS17',
    'AW18',
    'SS18',
    'SS19',
    'SS21',
    'SS22',
    'SS23',
    'SS24',
    'SS25',
  ];

  // Filter and sort categories based on the allowed list and order
  // const filteredCategories = categories
  //   .filter((cat) => allowedCategoryOrder.includes(cat.name))
  //   .sort((a, b) => {
  //     const indexA = allowedCategoryOrder.indexOf(a.name);
  //     const indexB = allowedCategoryOrder.indexOf(b.name);
  //     return indexA - indexB;
  //   });

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [products, setProducts] = useState<string[]>(images[categories[0]]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductsByCategory = async (category: string) => {
    setIsLoading(true);
    try {
      // const product_data = await getProducts(
      //   '',
      //   categoryId.toString(),
      //   '',
      //   1,
      //   6,
      // );
      setProducts(images[category]);

      if (emblaApi) {
        emblaApi.scrollTo(0, false);
      }
    } catch (error) {
      console.error('Failed to fetch products for category:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const navigateCategory = (direction: 'left' | 'right') => {
    if (categories.length === 0) return;

    let newIndex = currentCategoryIndex;
    if (direction === 'left') {
      newIndex =
        currentCategoryIndex === 0
          ? categories.length - 1
          : currentCategoryIndex - 1;
    } else {
      newIndex =
        currentCategoryIndex === categories.length - 1
          ? 0
          : currentCategoryIndex + 1;
    }

    setCurrentCategoryIndex(newIndex);
    fetchProductsByCategory(categories[newIndex]);
  };

  useEffect(() => {
    if (!emblaApi) return;

    // Force autoplay to start
    const timer = setTimeout(() => {
      autoplayPlugin?.play();
    }, 100);

    return () => clearTimeout(timer);
  }, [emblaApi, autoplayPlugin]);

  // Reset autoplay when products change
  useEffect(() => {
    if (!emblaApi) return;

    autoplayPlugin?.reset();
    autoplayPlugin?.play();
  }, [JSON.stringify(products), emblaApi, autoplayPlugin]);

  // const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onScroll = () => {
      // const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
      // setScrollProgress(progress * 100);
    };

    emblaApi.on('scroll', onScroll);
    onScroll();

    return () => {
      emblaApi.off('scroll', onScroll);
    };
  }, [emblaApi]);

  return (
    <section
      id="retrospective"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="h-screen flex flex-col py-8 md:px-8 md:py-12"
    >
      <h3 className="mb-6 md:px-4 pb-3 text-[32px] font-light capitalize tracking-tight  max-md:mx-4  max-md:border-b max-md:border-[#000000] max-md:leading-[36px] md:mb-8 md:text-[64px]">
        The Retrospective
      </h3>
      <div className="flex-1 overflow-hidden lg:border lg:border-[#212529]">
        <div className="grid md:grid-cols-[541px_1fr] h-full">
          <div className="flex flex-col justify-between p-4 md:p-8 md:py-12 lg:border-r lg:border-[#212529] h-full">
            <h1 className="mb-8 text-[24px] font-light text-[#1a1a1a] md:text-[32px] md:leading-[36px]">
              Explore LISA FOLAWIYO
              <br />
              Collections
            </h1>

            <div className="mt-5 flex items-center justify-between gap-3 border-[#000000] max-lg:border-b-[1px] max-md:mb-3 max-md:pb-3 md:mt-32">
              <p className="text-4xl font-light text-[#000000] md:text-[96px]">
                {categories.length > 0
                  ? categories[currentCategoryIndex]
                  : 'All'}
              </p>
              <div className="flex  gap-6">
                <button
                  onClick={() => navigateCategory('left')}
                  disabled={isLoading || categories.length === 0}
                  className="flex h-6 w-6 items-center justify-center border border-gray-400 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ArrowLeft className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={() => navigateCategory('right')}
                  disabled={isLoading || categories.length === 0}
                  className="flex h-6 w-6 items-center justify-center border border-gray-400 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ArrowRight className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          <div
            className="embla max-md:mx-4 h-full flex flex-col"
            ref={emblaRef}
            key={JSON.stringify(products)}
          >
            <div className="embla__container flex flex-1">
              {isLoading ? (
                <>
                  <ImageSkeleton />
                  <ImageSkeleton />
                </>
              ) : products.length > 0 ? (
                products.map((product, index) => (
                  <div
                    key={product}
                    className={`embla__slide group w-full flex-shrink-0 md:w-1/2 ${
                      index < products.length - 1
                        ? 'xl:border-r xl:border-[#212529]'
                        : ''
                    }`}
                  >
                    <div className="flex h-full w-full flex-col  pt-4 md:px-10 md:pt-10">
                      <div className="relative overflow-hidden bg-white transition-all duration-500 hover:scale-[1] hover:shadow-2xl">
                        <div className="relative z-10">
                          <Image
                            src={product ?? '/media/images/placeholder.png'}
                            alt={product}
                            width={521}
                            height={521}
                            className="h-[580px] w-full object-cover object-top brightness-75 transition-transform duration-700 group-hover:scale-[1.05]"
                          />
                        </div>
                        <div className="pointer-events-none absolute inset-0 z-10 w-full justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/40" />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="embla__slide flex w-full flex-col items-center justify-center p-12 md:p-20">
                  <p className="mb-2 text-xl font-light text-[#1a1a1a] md:text-2xl">
                    No Products Available
                  </p>
                  <p className="text-center text-sm text-gray-500 md:text-base">
                    This collection is currently empty. Check back soon for new
                    arrivals.
                  </p>
                </div>
              )}
            </div>

            {/* Scrollbar */}
            {/* <div className="embla__scrollbar mt-4 mb-4 mx-4 md:mx-10">
              <div className="embla__scrollbar__track h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="embla__scrollbar__thumb h-full bg-gray-800 rounded-full transition-all duration-200"
                  style={{
                    width: `${(100 / products.length) * 2}%`,
                    transform: `translateX(${scrollProgress}%)`,
                  }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
