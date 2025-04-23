import { Button } from "./ui/button";
import UniswapLogo from "./uniswap-logo";
import ToggleIcon from "./toggle-icon";
import NavSearchIcon from "./nav-search-icon";
import ShowMoreIcon from "./show-more-icon";

export default function Header() {
  return (
    <div className="row-[1] col-[1] sticky">
      <div className="relative box-content flex h-[72px] w-screen shrink-0 flex-col items-stretch justify-center border-b border-b-transparent">
        <nav className="font-basel flex w-full shrink-0 basis-auto items-center justify-center px-3">
          <div className="flex w-full gap-3">
            <div>
              <div className="flex items-center gap-1 p-2">
                <UniswapLogo />
                <span className="text-pink-500">Uniswap</span>
                <span className="hover:text-950 cursor-pointer text-gray-600">
                  <ToggleIcon />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center text-lg text-gray-600">
              <div>
                <div className="m-2">Trade</div>
              </div>
              <div>
                <div className="m-2">Explore</div>
              </div>
              <div>
                <div className="m-2">Pool</div>
              </div>
            </div>
          </div>
          <div className="flex h-[42px] shrink grow basis-auto self-center">
            <div className="grid-area-[input] flex h-[40px] max-w-[400px] min-w-[280px] items-center gap-1 rounded-[20px] border border-[rgba(34,34,34,0.05)] bg-gray-100 px-4 py-2">
              <NavSearchIcon />
              <span className="contents">
                <input
                  type="text"
                  placeholder="Search tokens"
                  autoCapitalize="sentences"
                  autoComplete="on"
                  className="w-full px-2"
                />
              </span>
              <div className="flex h-[20px] w-[20px] items-center justify-center rounded-[4px] bg-[rgba(34,34,34,0.05)] px-2 text-[12px] leading-[16px] font-[535] text-[rgba(19,19,19,0.63)] opacity-60 backdrop-blur-[60px]">
                /
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end gap-3">
            <div className="relative flex shrink-0 basis-auto cursor-pointer items-stretch opacity-100">
              <div className="h-[40px] w-[40px] rounded-full transition-colors duration-100 hover:bg-gray-100">
                <div className="flex h-full items-center justify-center leading-[12px]">
                  <ShowMoreIcon />
                </div>
              </div>
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
