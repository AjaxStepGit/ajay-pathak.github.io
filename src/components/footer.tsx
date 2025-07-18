import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import Icon from './ui/icon';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-primary-dark text-white h-[450px] ">
      <div className="w-res flex flex-col justify-around mt-[90px]">
        <div className="flex w-full justify-between">
          <h3 className="heading-mtext">Personal</h3>
          <div className="flex flex-col gap-2">
            <h3 className="title-text mb-1">MENU</h3>
            <p className="small-text text-white">About</p>
            <p className="small-text text-white">Services</p>
            <p className="small-text text-white">Blog</p>
            <p className="small-text text-white">Contact</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="title-text mb-1">SERVICE</h3>
            <p className="small-text text-white">Design</p>
            <p className="small-text text-white">Development</p>
            <p className="small-text text-white">Marketing</p>
            <p className="small-text text-white">See More</p>
          </div>
          <div className="flex h-fit gap-2">
            <Icon icon={<FacebookIcon className="size-12 p-2" />} />
            <Icon icon={<TwitterIcon className="size-12 p-2" />} />
            <Icon icon={<InstagramIcon className="size-12 p-2" />} />
          </div>
        </div>
        <Separator className="w-full" />
        <div className="flex justify-between">
          <p className="small-text text-white opacity-60">
            Copyright © 2022 Laaqiq. All Rights Reserved.
          </p>
          <div className="flex gap-17 small-text text-white">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
