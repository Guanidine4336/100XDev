import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { Jobsatom, Messagesatom, Networkatom, Notificationsatom, totalcntselector } from './atoms'

function App() {
  

  return (
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp() {
  const Networkatomcount = useRecoilValue(Networkatom);
  const Jobsatomcount = useRecoilValue(Jobsatom);
  const Notificationsatomcount = useRecoilValue(Notificationsatom);
  const Messagesatomcount = useRecoilValue(Messagesatom);
  const totalcntselectorcnt = useRecoilValue(totalcntselector);
  return <div>
    <button>Home</button>
    <button>My Network {Networkatomcount>=100?"99+":Networkatomcount}</button>
    <button>Jobs {Jobsatomcount}</button>
    <button>Messaging {Messagesatomcount}</button>
    <button>Notifications {Notificationsatomcount}</button>
    <button>Me {totalcntselectorcnt}</button>
  </div>
}

export default App
