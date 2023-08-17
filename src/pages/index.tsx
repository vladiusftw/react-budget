import Image from 'next/image';
import { Inter } from 'next/font/google';
import Budget from '@/components/Budget';

import Remaining from '@/components/Remaining';
import ExpenseTotal from '@/components/ExpenseTotal';
import ExpenseList from '@/components/ExpenseList';
import AllocationForm from '@/components/AllocationForm';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="container">
      <h1 className="mt-3">{"Company's Budget Allocation"}</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      <h3 className="mt-3">{'Allocation'}</h3>
      <div className="row ">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">{`Change allocation`}</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AllocationForm />
        </div>
      </div>
    </div>
  );
}

