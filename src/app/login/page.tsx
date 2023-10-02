import Image from 'next/image';
import logo from '../../assets/logo.png';
import SocialButtonLogin from '@/components/SocialButtonLogin';

export default function Login() {
    return (
        <main className='min-h-screen bg-[#181818]'>
            <header className='bg-black py-8 px-11'>
                <Image src={logo} alt="Logo" className='w-36 h-9' />
            </header>

            <section className='text-center bg-black my-20 w-2/4 py-20 px-12 rounded-md'>
                <h1 className='text-4xl font-bold'>Inicia sesión en Technify</h1>

                <div className='my-12 flex flex-col gap-4 items-center'> 
                    <SocialButtonLogin text='Continuar con Google' icon='' />
                    <SocialButtonLogin text='Continuar con Facebook' icon='' />
                    <SocialButtonLogin text='Continuar con Apple' icon='' />
                    <SocialButtonLogin text='Continuar con número de teléfono' icon='' />
                </div>

                <hr className='bg-slate-600' />
            </section>
        </main>
    );
}
