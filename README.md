# DataViz - Interactive Data Visualization Platform

DataViz is a modern web application for data visualization and analysis, built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Interactive Dashboards**: Monitor key metrics with real-time dashboards
- **Advanced Visualizations**: Create stunning visualizations with Chart.js and Nivo
- **Data Analysis**: Analyze complex datasets with powerful tools
- **Research & Insights**: Access the latest research on data visualization
- **Pivot Tables**: Explore data from different angles with interactive pivot tables

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
   git clone https://github.com/yourusername/dataviz.git
   cd dataviz
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
dataviz/
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

- **Home**: Landing page with overview of the platform
- **Dashboard**: Interactive dashboard with key metrics
- **Data Analysis**: Tools for analyzing complex datasets
- **Visualizations**: Advanced visualization examples using Nivo
- **Research**: Research articles and insights
- **About**: Information about the platform

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
