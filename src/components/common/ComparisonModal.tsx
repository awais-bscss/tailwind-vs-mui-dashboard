import React, { useState } from 'react';
import { X, CheckCircle2, Zap, Palette, Wrench, ShieldCheck, Gauge } from 'lucide-react';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'snippets' | 'verdict'>('matrix');

  if (!isOpen) return null;

  const comparisonData = [
    {
      factor: '1. Development Speed (DX)',
      icon: Zap,
      tailwind: 'Extremely fast once utility classes are familiar. Zero context switching between CSS and markup. However, complex primitives (modals, dropdowns) must be wired manually.',
      mui: 'Instant rapid scaffolding for standard dashboards using ready-to-use Table, Drawer, Card, and Button components. Very fast for MVP delivery.',
      winner: 'MUI for standard MVP / Tailwind for custom UI',
    },
    {
      factor: '2. Customization and Styling Freedom',
      icon: Palette,
      tailwind: 'Unrestricted pixel-perfect control. Arbitrary values, pseudo-selectors, and zero specificity battles.',
      mui: 'Customizable via sx prop, createTheme, and component overrides. Deep-overriding nested internal classes requires extra specificity management.',
      winner: 'Tailwind CSS (Total freedom)',
    },
    {
      factor: '3. Maintainability and Code Readability',
      icon: Wrench,
      tailwind: 'HTML class strings can grow long in complex layouts. Requires component abstraction to keep templates clean.',
      mui: 'Clean semantic JSX tags (Card, Typography, Table). Styling logic is centralized in theme files and typed sx objects.',
      winner: 'MUI for JSX structure / Tailwind for zero dead CSS',
    },
    {
      factor: '4. Design Consistency and Tokens',
      icon: ShieldCheck,
      tailwind: 'Enforced via tailwind.config.js theme tokens (colors, spacing, shadows, fonts). Any developer using text-brand-500 stays consistent.',
      mui: 'Enforced via centralized ThemeProvider with strict TypeScript autocomplete for colors, typography variants, and elevation.',
      winner: 'Tie (Both offer excellent token systems)',
    },
    {
      factor: '5. Bundle Size and Scalability',
      icon: Gauge,
      tailwind: 'Only emits used utility classes via PostCSS purge. Produces tiny CSS bundles (around 26 KB / 5.4 KB gzipped). Zero JS runtime styling overhead.',
      mui: 'Includes Emotion CSS-in-JS runtime and component JavaScript. Larger bundle footprint (around 455 KB raw / 141 KB gzip).',
      winner: 'Tailwind CSS (Superior performance and load speed)',
    },
  ];

  const tailwindSnippet = `// Tailwind Metric Card Implementation
export const StatCard = ({ title, value, change }) => (
  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center justify-between mb-3">
      <span className="text-xs font-semibold uppercase text-slate-500">{title}</span>
      <div className="p-2.5 rounded-xl bg-blue-50">
        <DollarSign size={20} className="text-blue-600" />
      </div>
    </div>
    <div className="text-3xl font-extrabold text-slate-900">{value}</div>
    <span className="inline-flex px-2 py-0.5 rounded-md font-semibold bg-emerald-50 text-emerald-700 text-xs mt-2">
      +{change}%
    </span>
  </div>
);`;

  const muiSnippet = `// Material UI (MUI) Metric Card Implementation
export const StatCard = ({ title, value, change }) => (
  <Card sx={{ height: '100%', p: 1, border: '1px solid #e2e8f0', '&:hover': { transform: 'translateY(-2px)' } }}>
    <CardContent sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="caption" sx={{ fontWeight: 700, color: '#64748b' }}>{title}</Typography>
        <Box sx={{ width: 40, height: 40, borderRadius: '12px', bgcolor: '#f0f7ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AttachMoneyRoundedIcon sx={{ color: '#0270c7' }} />
        </Box>
      </Box>
      <Typography variant="h4" sx={{ fontWeight: 800, color: '#0f172a' }}>{value}</Typography>
      <Chip label={\`+\${change}%\`} size="small" color="success" sx={{ fontWeight: 700, mt: 1 }} />
    </CardContent>
  </Card>
);`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-4xl max-h-[88vh] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-200 text-slate-800">
                Technical Architecture Report
              </span>
            </div>
            <h2 className="text-base font-bold text-slate-900 mt-1">
              Comparative Analysis: Tailwind CSS vs Material UI
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-200 px-6 pt-2 gap-6 bg-white text-xs font-semibold text-slate-500">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`pb-2.5 border-b-2 transition-all ${
              activeTab === 'matrix'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            5-Pillar Comparison Matrix
          </button>
          <button
            onClick={() => setActiveTab('snippets')}
            className={`pb-2.5 border-b-2 transition-all ${
              activeTab === 'snippets'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Code Comparison
          </button>
          <button
            onClick={() => setActiveTab('verdict')}
            className={`pb-2.5 border-b-2 transition-all ${
              activeTab === 'verdict'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Engineering Verdict
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1 text-sm bg-slate-50/50">
          {activeTab === 'matrix' && (
            <div className="space-y-3">
              {comparisonData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-slate-200 bg-white"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-xs">
                        <Icon size={15} className="text-blue-600" />
                        {item.factor}
                      </div>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        Advantage: {item.winner}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 text-xs leading-relaxed">
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="font-semibold text-slate-800 mb-1">Tailwind CSS</div>
                        <p className="text-slate-600">{item.tailwind}</p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                        <div className="font-semibold text-slate-800 mb-1">Material UI (MUI)</div>
                        <p className="text-slate-600">{item.mui}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'snippets' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500">
                Direct side-by-side comparison of the same Metric Card component implemented in both paradigms.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 font-mono text-xs">
                {/* Tailwind Code */}
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-200">
                  <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 text-cyan-400 font-sans font-semibold text-xs flex items-center justify-between">
                    <span>Tailwind CSS Implementation</span>
                    <span className="text-[10px] text-slate-400">Utility Classes</span>
                  </div>
                  <pre className="p-3 overflow-x-auto text-[11px] leading-relaxed">
                    <code>{tailwindSnippet}</code>
                  </pre>
                </div>

                {/* MUI Code */}
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-200">
                  <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 text-blue-400 font-sans font-semibold text-xs flex items-center justify-between">
                    <span>Material UI Implementation</span>
                    <span className="text-[10px] text-slate-400">JSX Components + sx</span>
                  </div>
                  <pre className="p-3 overflow-x-auto text-[11px] leading-relaxed">
                    <code>{muiSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'verdict' && (
            <div className="space-y-3 text-xs leading-relaxed text-slate-600">
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950">
                <div className="font-bold text-xs mb-1 flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-blue-600" />
                  Key Engineering Takeaways
                </div>
                <p>
                  Both styling solutions are enterprise-ready, but serve distinct purposes. Tailwind CSS provides maximal design autonomy and raw runtime performance, making it ideal for custom SaaS products and design systems. Material UI excels in corporate back-office suites and admin portals where standardized, accessible UI primitives and fast delivery take precedence over bespoke aesthetics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-bold text-slate-900 text-xs mb-2">When to Choose Tailwind CSS:</h4>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    <li>When building unique, bespoke consumer or SaaS UI that must not look like generic Material Design.</li>
                    <li>When strict page speed and Core Web Vitals (sub-50ms render times) are required.</li>
                    <li>When building an in-house Design System where design tokens must be strictly controlled.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="font-bold text-slate-900 text-xs mb-2">When to Choose Material UI:</h4>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    <li>Internal back-office tools, admin portals, and data-heavy enterprise dashboards.</li>
                    <li>Teams that lack dedicated UI designers and need out-of-the-box accessible widgets.</li>
                    <li>Projects heavily reliant on standard pre-built date pickers, complex tables, and dialogs.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-white flex items-center justify-between">
          <span className="text-xs text-slate-400">
            MA. Dashboard - Dual Styling Architecture Evaluation
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            Close Report
          </button>
        </div>
      </div>
    </div>
  );
};
