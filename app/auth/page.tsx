"use client";

// import { Button } from "@/components/ui/button";
// import { KeyRound } from "lucide-react";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
// import { supabaseBrowser } from "@/lib/supabase/browser";
// import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Signin from "@/components/Signin";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Page() {

	const [showSignin, setShowSignin] = useState(false)
	// const params = useSearchParams();
	// const next = params.get("next") || "";
	// const handleLoginWithOAuth = (provider: "github" | "google") => {
	// 	const supabase = supabaseBrowser();
	// 	supabase.auth.signInWithOAuth({
	// 		provider,
	// 		options: {
	// 			redirectTo: location.origin + "/auth/callback?next=" + next,
	// 		},
	// 	});
	// };

	return (
		<div>
			<div className='flex justify-between items-center'>
				<Navbar />
				<Button 
					onClick={() => setShowSignin(true)}
					variant="outline"
					className='mr-5'
				>
					Signin
				</Button>
			</div>
			<div className="flex items-center justify-center w-full h-[70vh]">
				{showSignin ? <Signin /> : <></>}
				
				{/* <div className=" w-96 rounded-md border p-5 space-y-5 relative bg-slate-900">
					<div className="flex items-center gap-2">
						<KeyRound />
						<h1 className="text-2xl font-bold">Next + Supabase</h1>
					</div>

					<p className="text-sm text-gray-300">
						Register/SignIn Today 👇
					</p>
					<div className="flex flex-col gap-5">
						<Button
							className=" w-full flex items-center gap-2 "
							variant="outline"
							onClick={() => handleLoginWithOAuth("github")}
						>
							<FaGithub /> Github
						</Button>
						<Button
							className=" w-full flex items-center gap-2 "
							variant="outline"
							onClick={() => handleLoginWithOAuth("google")}
						>
							<FcGoogle /> Google
						</Button>
					</div>
					<div className="glowBox -z-10"></div>
				</div> */}
			</div>
		</div>
	);
}
