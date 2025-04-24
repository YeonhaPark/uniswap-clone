import { Button } from "./ui/button";
import UniswapLogo from "./uniswap-logo";
import ToggleIcon from "./toggle-icon";
import HeaderSearchbar from "./header/header-searchbar";
import Preferences from "./preferences";
import ShowMoreIcon from "./show-more-icon";

export default function Header() {
  return (
    <div className="sticky col-[1] row-[1]">
      <div className="relative box-content flex h-[72px] w-screen shrink-0 flex-col items-stretch justify-center border-b border-b-transparent">
        <nav className="font-basel flex w-full shrink-0 basis-auto items-center justify-center px-3">
          <div className="flex w-full gap-3">
            <div>
              <div className="flex items-center gap-1 p-2">
                <UniswapLogo />
                <span className="text-pink-500">Uniswap</span>
                <span className="hover:text-950 text-neutral2 cursor-pointer">
                  <ToggleIcon />
                </span>
              </div>
            </div>
            <div className="text-neutral2 flex items-center justify-center gap-3 text-lg">
              <div>
                <div className="text-neutral1 m-2">Trade</div>{" "}
              </div>
              <div>
                <div className="m-2">Explore</div>
              </div>
              <div>
                <div className="m-2">Pool</div>
              </div>
            </div>
          </div>
          <HeaderSearchbar />
          <div className="flex w-full justify-end gap-3">
            <div className="relative flex shrink-0 basis-auto cursor-pointer items-stretch opacity-100">
              <Preferences trigger={<ShowMoreButton />} />
            </div>
            <div className="flex basis-auto">
              <Button className="cursor-pointer rounded-[12px] border border-transparent bg-pink-50 px-3 py-2 text-pink-500 hover:bg-pink-100 hover:text-pink-600">
                Connect
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

function ShowMoreButton() {
  return (
    <div className="hover:bg-surface1-hovered h-[40px] w-[40px] cursor-pointer rounded-full transition-colors duration-100">
      <div className="flex h-full items-center justify-center leading-[12px]">
        <ShowMoreIcon />
      </div>
    </div>
  );
}
