import { Box } from '@mui/material';

import { ReactNode } from 'react';

import ProffessionalServiceIcon from '@assets/svg/professional-service-icon.svg?react';
import HealthCare from '@assets/svg/healtcare-icon.svg?react';
import ECommerceIcon from '@assets/svg/e-commerce-icon.svg?react';
import CreativeIcon from '@assets/svg/creative-icon.svg?react';
import EducationTrainingIcon from '@assets/svg/education-training.svg?react';
import RealEstateIcon from '@assets/svg/real-estate-icon.svg?react';
import HomeServiceIcon from '@assets/svg/home-service-icon.svg?react';
import ConsultingIcon from '@assets/svg/consulting-icon.svg?react';

import './style.scss';

interface IndustryItem {
  icon: ReactNode;
  title: string;
  posisitons: string[];
}

const industries: IndustryItem[] = [
  {
    icon: <ProffessionalServiceIcon />,
    title: 'Professional Services',
    posisitons: ['Lawyers', 'Consultants', 'Accountants', 'Financial advisors'],
  },
  {
    icon: <HealthCare />,
    title: 'Professional Services',
    posisitons: ['Medical practices', 'Dental offices', 'Wellness centers'],
  },
  {
    icon: <ECommerceIcon />,
    title: 'E-commerce & Retail',
    posisitons: ['Online stores', 'Dropshipping', 'Digital products'],
  },
  {
    icon: <CreativeIcon />,
    title: 'Creative & Marketing',
    posisitons: ['Design agencies', 'Marketing firms', 'Advertising companies'],
  },
  {
    icon: <EducationTrainingIcon />,
    title: 'Education & Training',
    posisitons: ['Tutoring services', 'Online courses', 'Coaching', 'Educational institutions'],
  },
  {
    icon: <RealEstateIcon />,
    title: 'Real Estate',
    posisitons: ['Real estate agents', 'Property managers', 'Real estate investment firms'],
  },
  {
    icon: <HomeServiceIcon />,
    title: 'Home Service',
    posisitons: ['Contractors', 'Plumbers', 'Electricians', 'Cleaning services'],
  },
  {
    icon: <ConsultingIcon />,
    title: 'Consulting & Coaching',
    posisitons: ['Business consultants', 'Career coaches', 'Life coaches', 'Management consultants'],
  },
  {
    icon: <ProffessionalServiceIcon />,
    title: 'Professional Services',
    posisitons: ['Lawyers', 'Consultants', 'Accountants', 'Financial advisors'],
  },
  {
    icon: <HealthCare />,
    title: 'Professional Services',
    posisitons: ['Medical practices', 'Dental offices', 'Wellness centers'],
  },
  {
    icon: <ECommerceIcon />,
    title: 'E-commerce & Retail',
    posisitons: ['Online stores', 'Dropshipping', 'Digital products'],
  },
  {
    icon: <CreativeIcon />,
    title: 'Creative & Marketing',
    posisitons: ['Design agencies', 'Marketing firms', 'Advertising companies'],
  },
  {
    icon: <EducationTrainingIcon />,
    title: 'Education & Training',
    posisitons: ['Tutoring services', 'Online courses', 'Coaching', 'Educational institutions'],
  },
  {
    icon: <RealEstateIcon />,
    title: 'Real Estate',
    posisitons: ['Real estate agents', 'Property managers', 'Real estate investment firms'],
  },
  {
    icon: <HomeServiceIcon />,
    title: 'Home Service',
    posisitons: ['Contractors', 'Plumbers', 'Electricians', 'Cleaning services'],
  },
  {
    icon: <ConsultingIcon />,
    title: 'Consulting & Coaching',
    posisitons: ['Business consultants', 'Career coaches', 'Life coaches', 'Management consultants'],
  },
];

export default function Industries() {
  return (
    <Box className="industries">
      {industries.map((industyItem, index) => {
        return (
          <Box className="industy-item" key={index}>
            <Box className="industy-item__content">
              <Box className="icon">{industyItem.icon}</Box>
              <Box className="title">{industyItem.title}</Box>
            </Box>
            <Box className="industy-item__positions">
              {industyItem.posisitons.map((position, index) => (
                <Box key={index} className="position">
                  <p>{position}</p>
                </Box>
              ))}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
