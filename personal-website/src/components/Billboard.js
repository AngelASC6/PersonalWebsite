import background from '../assets/web_background.png';


export default function Billboard(){
    return (
        <div
            className="fixed z-10 inset-0 h-[50vh] flex items-center justify-center bg-center bg-cover "
            style={{ backgroundImage: `url(${background})` }}
        >
            <h1 className=" text-[12vh] font-light">
                I'm <span className="text-[#064523] font-medium">Angel</span>, nice to meet you!
            </h1>
        </div>
    );
    
}