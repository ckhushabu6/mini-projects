import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import styles from './TrendChart.module.css';

function TrendChart({ data }) {
  return (
    <div className={styles.chartWrapper}>
      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <AreaChart data={data}>
          <defs>
            <linearGradient
              id="expenseGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#6366f1"
                stopOpacity={0.7}
              />

              <stop
                offset="100%"
                stopColor="#6366f1"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="amount"
            stroke="#6366f1"
            fill="url(#expenseGradient)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TrendChart;