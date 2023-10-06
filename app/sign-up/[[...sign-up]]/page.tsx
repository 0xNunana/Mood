import { SignUp } from "@clerk/nextjs";


 const SignUpPage =()=>{
    return (
        <div className="flex items-center justify-center hero-gradient h-screen">
            <SignUp/>
        </div>
    )
}

export default SignUpPage