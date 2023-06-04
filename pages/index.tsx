import Image from 'next/image';
import home from "../app/images/home.jpg";

export default function Home() {
  return (
    <div className="flex-col content-center">
      <div className="flex-none h-14">
        <h1>Sher Mohammad</h1>
      </div>
      <div className="flex-initial">
        <Image src={home} alt='sher' className='to-100%' />
      </div>
    </div>

  )
}
