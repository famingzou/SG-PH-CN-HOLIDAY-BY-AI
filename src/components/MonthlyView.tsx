import React from 'react';
import SingaporeJan from './SingaporeJan';
import PhilippinesMay from './PhilippinesMay';
import ChinaOct from './ChinaOct';
import { Region } from '../App';

export default function MonthlyView({ region, month, onBack }: { region: Region, month: number, onBack: () => void }) {
  if (region === 'Singapore' || month === 1) {
    return <SingaporeJan onBack={onBack} />;
  } else if (region === 'Philippines' || month === 5) {
    return <PhilippinesMay onBack={onBack} />;
  } else if (region === 'China' || month === 10) {
    return <ChinaOct onBack={onBack} />;
  } else {
    // Fallback to Singapore for other months for demo
    return <SingaporeJan onBack={onBack} />;
  }
}
