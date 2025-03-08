# 4lor - Data-Driven Analysis Platform

4lor is a modern web application for data visualization and analysis, focused on providing critical insights into Cultural Marxism and the World Economic Forum (WEF). The platform examines the intellectual origins, influence, and real-world consequences of these ideologies and organizations.

## Features

- **Interactive Dashboards**: Monitor key metrics and trends related to ideological influence
- **Advanced Visualizations**: Create stunning visualizations of complex socio-economic data
- **Data Analysis**: Analyze datasets showing the impact of policies and ideologies
- **Research & Insights**: Access well-researched articles on Cultural Marxism and the WEF
- **Pivot Tables**: Explore data from different angles with interactive pivot tables

## Content Focus

- **Cultural Marxism Analysis**: Deep dive into its intellectual origins from the Frankfurt School to postmodernist ideology and critical theory
- **Institutional Influence**: Examination of how these ideas have shaped political discourse, education, corporate governance, and public policy
- **WEF Analysis**: Critical assessment of the World Economic Forum's stated goals versus actual socio-economic outcomes
- **Policy Impact**: Analysis of centralization of power, ESG mandates, stakeholder capitalism, and global governance
- **Sovereignty & Freedom**: Data-driven insights on impacts to national sovereignty, economic structures, and individual freedoms

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: 
  - [Chart.js](https://www.chartjs.org/)
  - [Nivo](https://nivo.rocks/)
- **Data Analysis**:
  - [WebDataRocks](https://www.webdatarocks.com/) for pivot tables
- **Content Management**:
  - [Sanity](https://www.sanity.io/) for blog and research content

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ArsCodeAmatoria/4lor.git
   cd 4lor
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
4lor/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── about/            # About page
│   │   ├── analysis/         # Data analysis page
│   │   ├── dashboard/        # Dashboard page
│   │   ├── research/         # Research page
│   │   ├── visualizations/   # Visualizations page
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   ├── components/           # React components
│   │   ├── ui/               # UI components from shadcn/ui
│   │   ├── navigation.tsx    # Navigation component
│   │   └── PivotTable.tsx    # WebDataRocks pivot table component
│   └── lib/                  # Utility functions
└── public/                   # Static assets
```

## Pages

- **Home**: Landing page with overview of the platform and key findings
- **Dashboard**: Interactive dashboard with key metrics on ideological influence
- **Data Analysis**: Tools for analyzing datasets on Cultural Marxism and WEF impact
- **Visualizations**: Advanced visualization of socio-economic trends and policy outcomes
- **Research**: Well-researched articles and critical analysis
- **About**: Information about the platform and methodology

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Chart.js](https://www.chartjs.org/) and [Nivo](https://nivo.rocks/) for the visualization libraries
- [WebDataRocks](https://www.webdatarocks.com/) for the pivot table functionality
- [Framer Motion](https://www.framer.com/motion/) for the animations
- [Lucide Icons](https://lucide.dev/) for the icons
- [Sanity](https://www.sanity.io/) for the content management system
