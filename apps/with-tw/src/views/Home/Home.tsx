import { SVGIcon } from "@/views/shared/components/svg-icon/svg-icon";
import { AddIcon, AvatarIcons } from "@/views/shared/components/icons";
import Link from "next/link";

export const HomeView = () => (
  <>
    <div className="bg-zinc-900 text-white min-h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col items-center max-w-[85%]">
        <div className="">
          <div className="text-3xl lg:text-5xl">Chi vuole guardare Netflix ?</div>
        </div>
        <div className="mt-5 lg:mt-10">
          <div className="flex justify-center flex-wrap gap-2 lg:gap-6">
            {['Luke', 'Matt', "Jane", 'Sarah'].map((user_name, i) => (
              <div key={user_name} className="group relative flex flex-col gap-1 items-center text-gray-500 hover:text-gray-50">
                <Link href="/browse" className="absolute inset-0" />
                <div className="w-[10vw] min-w-[84px] max-w-[200px] rounded-md overflow-hidden border-2 border-transparent group-hover:border-gray-50">
                  <SVGIcon icon={AvatarIcons[i % AvatarIcons.length]} />
                </div>
                <div className="text-sm">{user_name}</div>
              </div>
            ))}
            <div className="group relative flex flex-col gap-0 items-center text-gray-500 hover:text-gray-50">
              <div className="w-[10vw] min-w-[84px] max-w-[200px] rounded-md overflow-hidden group-hover:bg-gray-50 group-hover:text-gray-500">
                <Link href="#" className="absolute inset-0" />
                <div className="p-5">
                  <SVGIcon icon={<AddIcon />} />
                </div>
              </div>
              <div className="text-sm">Aggiungi un profilo</div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button type="button" className="text-sm text-gray-500 border border-gray-500 px-5 py-2 hover:text-gray-50 hover:border-gray-50">Gestisci i profili</button>
        </div>
      </div>
    </div>
  </>
);
