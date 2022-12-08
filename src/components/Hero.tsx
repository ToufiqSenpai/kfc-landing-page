import { Badge, Typography } from '@mui/material';
import kfcLogo from '../assets/kfc-logo.png'
import kfcHeroImg from '../assets/kfc-hero-img.png'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

function Hero() {
  return (
    <article className='h-screen ipad:h-max bg-red-500 text-white'>
      <nav className='h-20 flex justify-between items-center px-32 pt-14 max-mobile:px-4 max-mobile:pt-2'>
        <img src={kfcLogo} className='grayscale w-32 object-cover' /> 
        <section className='flex items-center'>
          <div className='flex items-center gap-5 mr-8 font-medium max-mobile:hidden'>
            <a>ABOUT US</a>
            <a>FIND US</a>
            <a>ALL CAMPAIGNS</a>
          </div>
          <div className='flex gap-3 text-black'>
            <div className='bg-white p-1 rounded-full'>
              <PersonOutlinedIcon 
                sx={{
                  width: 32,
                  height: 32
                }}
              />
            </div>
            <Badge 
              badgeContent={3} 
              sx={{ "& .MuiBadge-badge": { backgroundColor: 'black', color: 'white' }}}
            >
              <div className='bg-white p-1 rounded-full'>
                <ShoppingBasketOutlinedIcon
                  sx={{
                    width: 32,
                    height: 32
                  }}
                />
              </div>
            </Badge>
          </div>
        </section>
      </nav>
      <section className='px-32 max-mobile:px-4 mt-36 grid grid-cols-2 max-mobile:grid-cols-1 justify-between justify-items-center items-center'>
        <div>
          <h1 className='text-6xl font-bold w-42'>BARGAIN BUCKET MENU CAMPAIGN</h1>
          <p className='w-42 mt-5'>Original recipe chicken and fries, and plenty of it. Sometimes that's all you need to turn an average day into a great one.</p>
          <button type='button' className='border-[3px] border-solid border-white rounded-full font-medium px-14 py-2 mt-6 text-2xl'>ORDER NOW</button>
        </div>
        <div className='ipad:my-8'>
          <img src={kfcHeroImg} className='max-mobile:w-[450px] w-[615px]' />
        </div>
      </section>
    </article>
  )
}

export default Hero