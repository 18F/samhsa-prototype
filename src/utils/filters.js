export const age = [
  { value: '', label: 'All ages' },
  { value: 'ADLT', label: 'Adults (18 and older)' },
  { value: 'CHLD', label: 'Youth (under 18)' }
];

export const distance = [
  { value: 8046.72, label: '5 miles' },
  { value: 16093.4, label: '10 miles' },
  { value: 40233.6, label: '25 miles' },
  { value: 80467.2, label: '50 miles' },
  { value: 160934, label: '100 miles' },
  { value: '', label: '100+ miles' }
];

export const mat = [
  {
    value: '',
    label: 'All types of treatment'
  },
  {
    value: 'BU',
    label: 'Buprenorphine'
  },
  {
    value: 'METH',
    label: 'Methadone'
  },
  {
    value: 'NU',
    label: 'Naltrexone'
  }
];

export const payment = [
  {
    value: '',
    label: 'All payment options'
  },
  {
    value: 'PI',
    label: 'Private health insurance',
    description:
      'Those with private insurance typically get it through an employer or insurance exchange. For example: PPO or HMO coverage.'
  },
  {
    value: 'MD',
    label: 'Medicaid',
    description:
      'Government program providing health coverage for people with very low income.'
  },
  {
    value: 'NP',
    label: 'Free or no-cost care',
    description: 'Free services; no payment needed.'
  },
  {
    value: 'MC',
    label: 'Medicare',
    description:
      'Federal health insurance for adults 65 and older, or younger people with certain disabilities.'
  },
  {
    value: 'PA',
    label: 'Payment assistance available',
    description:
      'Facilities that may offer help paying for services. Check with the facility for details.'
  },
  {
    value: 'SS',
    label: 'Sliding fee scale',
    description: 'Adjustable fees based on income.'
  },
  {
    value: 'SF',
    label: 'Cash or self-payment',
    description: 'Accepts direct payment for treatment.'
  },
  {
    value: 'MI',
    label: 'Military insurance (e.g. TRICARE)'
  },
  {
    value: 'ITU',
    label: 'IHS/Tribal/Urban (ITU) funds'
  }
];

export const special = [
  {
    value: 'VET',
    label: 'Veterans'
  },
  {
    value: 'GL',
    label: 'LGBT (Lesbian, gay, bisexual, transgender)'
  }
];

export const type = [
  {
    value: '',
    label: 'All types of treatment'
  },
  {
    value: 'ISC',
    label: 'Interim care',
    description: 'When immediate admission to other care isn’t available.'
  },
  {
    value: 'DT',
    label: 'Detox',
    description: 'Supervised withdrawal from substance use.'
  },
  {
    value: 'OP',
    label: 'Outpatient',
    description:
      'Treatment at a program site while a patient lives on their own.'
  },
  {
    value: 'HI',
    label: 'Hospital inpatient',
    description: '24/7 care connected to a hospital, lasting days or weeks.'
  },
  {
    value: 'RES',
    label: 'Residential',
    description: 'Live-in care, lasting for one month to one year.'
  },
  {
    value: 'HH',
    label: 'Transitional housing',
    description:
      'Temporary space to stay while transitioning from an intensive treatment setting. Sometimes called a halfway house or sober living.'
  },
  {
    value: 'CO',
    label: 'Co-occurring mental health and substance use treatment',
    description:
      'Integrated care that addresses substance use and mental illness.'
  },
  {
    value: 'CT',
    label: 'Telemedicine (including internet and mobile programs)',
    description:
      'Care given over the phone or online to support treatment and recovery.'
  }
];
