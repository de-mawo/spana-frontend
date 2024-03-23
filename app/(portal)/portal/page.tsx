import React from 'react'
import WelcomeBanner from './WelcomeBanner'
import { getCurrentUser } from '@/lib/session';
import Calendar from './Calendar';
import { getUserBalances } from '@/lib/data/getBalanceData';
import Container from '@/components/Common/Container';
import UserBalances from './UserBalances';
import { getUserEventsData } from '@/lib/data/getEventData';
import { Balances, Events, User } from '@/types';

const Portal = async () => {
  const user = await getCurrentUser();

  
  // const CurrentYearBalances = await getUserBalances();
  // const Events = await getUserEventsData();
  return (
    <>
    <WelcomeBanner user={user as User} />
    {/* <Calendar events={Events as Events[]} />
    <div>
        <Container>
          {!CurrentYearBalances ? (
            <div className="my-4">
              <h2 className="text-xl text-center font-extrabold leading-tight  lg:text-2xl">
                No Balances Data found...
              </h2>
            </div>
          ) : (
            <div className=" my-4 ">
              <h2 className="text-xl text-center font-extrabold leading-tight  lg:text-2xl">
                Current Year Balances
              </h2>
            </div>
          )}
        </Container>
        <UserBalances balances={CurrentYearBalances as  Balances} />
      </div> */}
    </>
  )
}

export default Portal