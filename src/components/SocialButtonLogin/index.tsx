
interface SocialButtonLoginProps {
    icon: string,
    text: string
}

export default function SocialButtonLogin({icon, text} : SocialButtonLoginProps ) {
    return (
        <button className='w-2/5 py-2 border-solid border-2 border-gray-400 rounded-full w-full cursor-auto hover:border-gray-100'>
            <p className="font-bold text-md">
                {text}
            </p>
        </button>
    );
}
