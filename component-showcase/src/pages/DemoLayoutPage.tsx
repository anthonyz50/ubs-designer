import {
  Header,
  PageFooter,
  Logo,
  Button,
  Typography,
  Grid,
  Card,
  CTA,
  SectionWrapper,
  Divider,
  Amount,
  Stat,
  Avatar,
  Badge,
  Links,
} from '@ubs/design-system';

export default function DemoLayoutPage() {
  return (
    <div>
      <div className="demo-info-bar">
        <span>📐 Live demo layout built with UBS Design System components</span>
        <span className="demo-info-bar-hint">Scroll down to see all sections</span>
      </div>

      <div className="demo-layout-frame">
        {/* ─── TOP NAV ─────────────────────────────────────── */}
        <Header
          variant="standard"
          logo={<Logo variant="full" colour="black" size={90} />}
          navItems={[
            { label: 'Home', href: '#', active: true },
            { label: 'Wealth Management', href: '#' },
            { label: 'Investment Bank', href: '#' },
            { label: 'Asset Management', href: '#' },
            { label: 'About Us', href: '#' },
          ]}
          actions={
            <div style={{ display: 'flex', gap: 8 }}>
              <Button variant="outline" size="small">Log In</Button>
              <Button variant="primary" size="small">Get Started</Button>
            </div>
          }
        />

        {/* ─── HERO SECTION ────────────────────────────────── */}
        <section className="demo-hero">
          <div className="demo-hero-content">
            <Badge variant="red">New</Badge>
            <Typography variant="keyline" as="h1">
              Investing for a<br />better tomorrow
            </Typography>
            <Typography variant="leadText1" as="p" style={{ maxWidth: 600, marginTop: 16, opacity: 0.85 }}>
              We combine global expertise with personalised advice to help you grow,
              protect, and manage your wealth across generations.
            </Typography>
            <div className="demo-hero-actions">
              <CTA variant="button" label="Open an Account" href="#" />
              <CTA variant="text" label="Learn more" href="#" />
            </div>
          </div>
          <div className="demo-hero-stats">
            <div className="demo-hero-stat-card">
              <Stat label="Assets Under Management" value="5.7T" prefix="CHF " size="lg" />
            </div>
            <div className="demo-hero-stat-card">
              <Stat label="Countries" value="50+" size="lg" />
            </div>
            <div className="demo-hero-stat-card">
              <Stat label="Years of Excellence" value="160+" size="lg" />
            </div>
          </div>
        </section>

        {/* ─── KEY FIGURES ─────────────────────────────────── */}
        <SectionWrapper padding="lg" background="pastel1">
          <Typography variant="subheadline1" as="h2" style={{ textAlign: 'center', marginBottom: 32 }}>
            Market Performance
          </Typography>
          <Grid columns={4} gap="medium">
            <Card padding="medium" hoverable>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Typography variant="captions">SMI Index</Typography>
                <Badge variant="success" size="sm">Live</Badge>
              </div>
              <Amount value={12453.67} currency="CHF" showCurrency size="large" trend="up" />
              <Typography variant="captions" style={{ opacity: 0.6 }}>+1.24% today</Typography>
            </Card>
            <Card padding="medium" hoverable>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Typography variant="captions">EUR/CHF</Typography>
                <Badge variant="success" size="sm">Live</Badge>
              </div>
              <Amount value={0.9412} currency="CHF" size="large" trend="down" />
              <Typography variant="captions" style={{ opacity: 0.6 }}>-0.08% today</Typography>
            </Card>
            <Card padding="medium" hoverable>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Typography variant="captions">Gold (XAU)</Typography>
                <Badge variant="success" size="sm">Live</Badge>
              </div>
              <Amount value={2341.50} currency="USD" showCurrency size="large" trend="up" />
              <Typography variant="captions" style={{ opacity: 0.6 }}>+0.67% today</Typography>
            </Card>
            <Card padding="medium" hoverable>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Typography variant="captions">S&P 500</Typography>
                <Badge variant="success" size="sm">Live</Badge>
              </div>
              <Amount value={5234.18} currency="USD" showCurrency size="large" trend="up" />
              <Typography variant="captions" style={{ opacity: 0.6 }}>+0.45% today</Typography>
            </Card>
          </Grid>
        </SectionWrapper>

        {/* ─── ABOUT SECTION ───────────────────────────────── */}
        <SectionWrapper padding="lg" background="white">
          <Grid columns={2} gap="large">
            <div className="demo-about-text">
              <Typography variant="subheadline1" as="h2">
                About UBS
              </Typography>
              <Divider style={{ margin: '16px 0' }} />
              <Typography variant="copyText" as="p" style={{ marginBottom: 16, lineHeight: 1.7 }}>
                UBS is the world&apos;s largest and only truly global wealth manager. We operate
                through four business divisions: Global Wealth Management, Personal &amp; Corporate
                Banking, Asset Management and the Investment Bank.
              </Typography>
              <Typography variant="copyText" as="p" style={{ marginBottom: 24, lineHeight: 1.7 }}>
                Our strategy is centred on our leading global wealth management business and
                our premier universal bank in Switzerland, enhanced by Asset Management and the
                Investment Bank.
              </Typography>
              <div style={{ display: 'flex', gap: 12 }}>
                <Button variant="primary">Discover Our Services</Button>
                <Button variant="outline">Read Annual Report</Button>
              </div>
            </div>
            <div className="demo-about-cards">
              <Card padding="medium" variant="pastel1" hoverable>
                <Typography variant="subheadline3" as="h3">Wealth Management</Typography>
                <Typography variant="copyText" as="p">
                  Comprehensive investment advice and portfolio management for
                  high-net-worth individuals worldwide.
                </Typography>
                <Links href="#" variant="standalone">Learn more</Links>
              </Card>
              <Card padding="medium" variant="pastel2" hoverable style={{ marginTop: 16 }}>
                <Typography variant="subheadline3" as="h3">Investment Bank</Typography>
                <Typography variant="copyText" as="p">
                  Leading advisory, capital markets and research capabilities
                  serving institutional and corporate clients.
                </Typography>
                <Links href="#" variant="standalone">Learn more</Links>
              </Card>
              <Card padding="medium" variant="gray" hoverable style={{ marginTop: 16 }}>
                <Typography variant="subheadline3" as="h3">Asset Management</Typography>
                <Typography variant="copyText" as="p">
                  Active and passive investment solutions across traditional
                  and alternative asset classes.
                </Typography>
                <Links href="#" variant="standalone">Learn more</Links>
              </Card>
            </div>
          </Grid>
        </SectionWrapper>

        {/* ─── TEAM / TRUST SECTION ────────────────────────── */}
        <SectionWrapper padding="lg" background="pastel2">
          <Typography variant="subheadline1" as="h2" style={{ textAlign: 'center', marginBottom: 8 }}>
            Trusted Worldwide
          </Typography>
          <Typography variant="copyText" as="p" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 40px', opacity: 0.7 }}>
            Our teams across the globe work together to deliver exceptional results for our clients.
          </Typography>
          <Grid columns={3} gap="medium">
            {[
              { name: 'Sarah Chen', role: 'Chief Investment Officer', region: 'APAC' },
              { name: 'Marcus Weber', role: 'Head of Wealth Management', region: 'EMEA' },
              { name: 'Elena Rodriguez', role: 'Global Head of Research', region: 'Americas' },
            ].map((person) => (
              <Card key={person.name} padding="medium" hoverable>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <Avatar name={person.name} size="lg" status="online" />
                  <div>
                    <Typography variant="subheadline3">{person.name}</Typography>
                    <Typography variant="captions" style={{ opacity: 0.6 }}>{person.role}</Typography>
                  </div>
                </div>
                <Badge variant="default">{person.region}</Badge>
              </Card>
            ))}
          </Grid>
        </SectionWrapper>

        {/* ─── FOOTER ──────────────────────────────────────── */}
        <PageFooter
          variant="standard"
          logo={<Logo variant="full" colour="white" size={80} />}
          columns={[
            {
              title: 'Services',
              links: [
                { label: 'Wealth Management', href: '#' },
                { label: 'Investment Bank', href: '#' },
                { label: 'Asset Management', href: '#' },
                { label: 'Personal Banking', href: '#' },
              ],
            },
            {
              title: 'About',
              links: [
                { label: 'Our Firm', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Investors', href: '#' },
                { label: 'Media', href: '#' },
              ],
            },
            {
              title: 'Legal',
              links: [
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Use', href: '#' },
                { label: 'Cookie Policy', href: '#' },
                { label: 'Regulatory', href: '#' },
              ],
            },
          ]}
          legal="This website is not directed to any person in any jurisdiction where the publication or availability of the website is prohibited."
          copyright="© 2024 UBS Group AG. All rights reserved."
        />
      </div>
    </div>
  );
}
