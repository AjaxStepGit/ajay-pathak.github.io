import { CherryIcon } from 'lucide-react';
import ContactDialog from './dialog/contact-dialog';

export default function Header() {
  return (
    <div className="w-full h-header flex justify-center bg-primary-dark">
      <div className="flex justify-between items-center py-4 w-res">
        <h1 className="flex items-center gap-4 text-xl font-bold">
          <span>
            <CherryIcon className="h-12 text-secondary" />
          </span>
          CherriAjax
        </h1>
        <div className="flex text-base gap-16">
          <p>About</p>
          <p>Services</p>
          <p>Github</p>
          {/* <p>Pricing</p>
          <p>Blog</p> */}
        </div>
        <ContactDialog
          triggerText="CONTACT"
          triggerClassName="h-12 border border-white rounded-sm text-sm uppercase bg-transparent font-black w-[138px] h-[48px]"
        />
      </div>
    </div>
  );
}
