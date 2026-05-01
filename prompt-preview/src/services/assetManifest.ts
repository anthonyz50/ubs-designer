// ============================================================
// UBS Asset Manifest
// ============================================================
// Typed references to real UBS assets (icons, illustrations,
// city skylines) served from the public/ folder.
// All paths are relative to the Vite public root (/).

// ─── Webapp Icons ──────────────────────────────────────────

export const UBS_ICONS = {
  account: '/icons/account.svg',
  'account-add': '/icons/account-add.svg',
  'account-payment': '/icons/account-payment.svg',
  'account-transfer': '/icons/account-transfer.svg',
  'add-comment': '/icons/add-comment.svg',
  'add-filter': '/icons/add-filter.svg',
  address: '/icons/address.svg',
  'ai-confirmed': '/icons/ai-confirmed.svg',
  'ai-error': '/icons/ai-error.svg',
  'ai-processing': '/icons/ai-processing.svg',
  'ai-warning': '/icons/ai-warning.svg',
  'arrow-down': '/icons/arrow-down.svg',
  'arrow-left': '/icons/arrow-left.svg',
  'arrow-right': '/icons/arrow-right.svg',
  'arrow-up': '/icons/arrow-up.svg',
  attachment: '/icons/attachment.svg',
  attention: '/icons/attention.svg',
  'bar-chart': '/icons/bar-chart.svg',
  bell: '/icons/bell.svg',
  'bell-new': '/icons/bell-new.svg',
  bin: '/icons/bin.svg',
  bot: '/icons/bot.svg',
  budget: '/icons/budget.svg',
  'burger-menu': '/icons/burger-menu.svg',
  calculator: '/icons/calculator.svg',
  calendar: '/icons/calendar.svg',
  'candlestick-graph': '/icons/candlestick-graph.svg',
  'card-credit': '/icons/card-credit.svg',
  'card-debit': '/icons/card-debit.svg',
  'card-pay': '/icons/card-pay.svg',
  chat: '/icons/chat.svg',
  'chevron-down': '/icons/chevron-down.svg',
  'chevron-left': '/icons/chevron-left.svg',
  'chevron-right': '/icons/chevron-right.svg',
  'chevron-up': '/icons/chevron-up.svg',
  clock: '/icons/time.svg',
  cloud: '/icons/cloud.svg',
  contact: '/icons/contact.svg',
  currency: '/icons/currency.svg',
  delete: '/icons/delete.svg',
  download: '/icons/download.svg',
  edit: '/icons/edit.svg',
  email: '/icons/email.svg',
  eye: '/icons/eye.svg',
  favorite: '/icons/favorite.svg',
  filter: '/icons/filter.svg',
  folder: '/icons/folder.svg',
  home: '/icons/home.svg',
  key: '/icons/key.svg',
  link: '/icons/link.svg',
  lock: '/icons/lock.svg',
  logout: '/icons/logout.svg',
  menu: '/icons/menu.svg',
  pin: '/icons/pin.svg',
  print: '/icons/print.svg',
  refresh: '/icons/refresh.svg',
  scan: '/icons/scan.svg',
  search: '/icons/search.svg',
  settings: '/icons/settings.svg',
  share: '/icons/share.svg',
  sort: '/icons/sort.svg',
  time: '/icons/time.svg',
  undo: '/icons/undo.svg',
  upload: '/icons/upload.svg',
  user: '/icons/user.svg',
  video: '/icons/video.svg',
  wallet: '/icons/wallet.svg',
} as const;

export type UbsIconKey = keyof typeof UBS_ICONS;

// ─── Illustrations ─────────────────────────────────────────

export const UBS_ILLUSTRATIONS = {
  general: {
    desk: '/illustrations/general/desk_workspace.svg',
    helpDesk: '/illustrations/general/help_desk_man_assistance.svg',
    clocks: '/illustrations/general/clocks.svg',
    rocket: '/illustrations/general/rocket_start.svg',
    rocketFly: '/illustrations/general/rocket_fly_success.svg',
    mail: '/illustrations/general/mail_letter_bell.svg',
    notification: '/illustrations/general/notification_allow_woman_bell_checkmark.svg',
    success: '/illustrations/general/woman_confetti_gold_success.svg',
    teamSuccess: '/illustrations/general/man_woman_stars.svg',
    paperPlane: '/illustrations/general/paperplane_checkmark_success.svg',
    videoConference: '/illustrations/general/Closed_video_empty_desk.svg',
    pendulum: '/illustrations/general/pendulum.svg',
    balloon: '/illustrations/general/air_balloon.svg',
    astronaut: '/illustrations/general/astronaut_stars.svg',
    windmill: '/illustrations/general/windmill.svg',
    message: '/illustrations/general/message.svg',
    bell: '/illustrations/general/bell_tile.svg',
    heartPlus: '/illustrations/general/heart_plus.svg',
    error404: '/illustrations/general/tree_miss_page_questionmark_pin_404.svg',
  },
  finance: {
    bank: '/illustrations/finance/bank_government_flower.svg',
    investment: '/illustrations/finance/graph_flowers_investment.svg',
    transactions: '/illustrations/finance/magnify_glass_transactions.svg',
    piggyBank: '/illustrations/finance/piggy_bank_pillar_coins.svg',
    payment: '/illustrations/finance/woman_card_auto_top_up_payments_reserved.svg',
    portfolioMan: '/illustrations/finance/man_cat_sofa_phone_graph.svg',
    portfolioWoman: '/illustrations/finance/woman_clocks_time_chart_bond.svg',
    savings: '/illustrations/finance/plant_flower_pot_butterfly.svg',
    trade: '/illustrations/finance/man_globe_graph_trade.svg',
    transfer: '/illustrations/finance/dandelion_transfer_money_reserved.svg',
    crypto: '/illustrations/finance/woman_confetti_crypto_success.svg',
    qrBill: '/illustrations/finance/qr_bill_checkmark.svg',
    eBill: '/illustrations/finance/eBill.svg',
    target: '/illustrations/finance/target_flag.svg',
    dashboard: '/illustrations/finance/monitor_bubble.svg',
    reporting: '/illustrations/finance/speedometer_high.svg',
    help: '/illustrations/finance/woman_seat_phone_questionmark_cat_help_2.0.svg',
  },
  identity: {
    confirmIdentity: '/illustrations/identity/Confirm_identity.svg',
    nfcScan: '/illustrations/identity/NFC_ID_iOS_scan_front.svg',
    categories: '/illustrations/identity/PFM_categories.svg',
    charts: '/illustrations/identity/PFM_charts_saving_target.svg',
    expenses: '/illustrations/identity/PFM_expenses.svg',
    housing: '/illustrations/identity/PFM_housing_mortgage.svg',
    insurance: '/illustrations/identity/PFM_insurance.svg',
    savingTarget: '/illustrations/identity/PFM_saving_target.svg',
    shopping: '/illustrations/identity/PFM_shopping.svg',
    taxReport: '/illustrations/identity/PFM_tax_report.svg',
    transfer: '/illustrations/identity/PFM_transfer_money.svg',
    transport: '/illustrations/identity/PFM_transport.svg',
    forecast: '/illustrations/identity/PFM_calendar_transaction_forecast.svg',
  },
  topics: {
    construction: '/illustrations/topics/Construction_ruler_pencil_paper_colour.svg',
    farmland: '/illustrations/topics/Farmland_field_tree_tractor.svg',
    interest: '/illustrations/topics/Interest_divident_coins_money_chart_arrow.svg',
    mortgage: '/illustrations/topics/Mortgage_home_apartament.svg',
    mortgageVacation: '/illustrations/topics/Mortgage_home_apartament_tree_vacation.svg',
    security: '/illustrations/topics/Security_prevention_shield.svg',
    securityScan: '/illustrations/topics/Security_identification_scan.svg',
    mobileBanking: '/illustrations/topics/Smartphone_mobile_banking.svg',
    tax: '/illustrations/topics/Tax_declaration_deduction.svg',
    taxReport: '/illustrations/topics/Tax_report.svg',
    travel: '/illustrations/topics/Travel_city_luggage.svg',
    wellbeing: '/illustrations/topics/Wellbeing_health_apple_sport.svg',
  },
  cities: {
    london: '/illustrations/cities/London \u2013 UK.svg',
    zurich: '/illustrations/cities/Zurich \u2013 Switzerland.svg',
    newYork: '/illustrations/cities/New York \u2013 USA.svg',
    singapore: '/illustrations/cities/Singapore \u2013 Singapore.svg',
    hongKong: '/illustrations/cities/Hong Kong \u2013 China.svg',
    tokyo: '/illustrations/cities/Tokyo \u2013 Japan.svg',
    sydney: '/illustrations/cities/Sydney \u2013 Australia.svg',
    frankfurt: '/illustrations/cities/Frankfurt \u2013 Germany.svg',
    shanghai: '/illustrations/cities/Shanghai \u2013 China.svg',
    mumbai: '/illustrations/cities/Mumbai \u2013 India.svg',
    dubai: '/illustrations/cities/Dubai \u2013 United Arab Emirates.svg',
    paris: '/illustrations/cities/Paris \u2013 France.svg',
    chicago: '/illustrations/cities/Chicago \u2013 USA.svg',
    toronto: '/illustrations/cities/Toronto \u2013 Canada.svg',
    amsterdam: '/illustrations/cities/Amsterdam \u2013 Netherlands.svg',
    seoul: '/illustrations/cities/Seoul \u2013 South Korea.svg',
    berlin: '/illustrations/cities/Berlin \u2013 Germany.svg',
    bangkok: '/illustrations/cities/Bangkok \u2013 Thailand.svg',
    sanFrancisco: '/illustrations/cities/San Francisco \u2013 USA.svg',
    losAngeles: '/illustrations/cities/Los Angeles \u2013 USA.svg',
  },
} as const;

// ─── Helpers ───────────────────────────────────────────────

/** Resolve an icon name string to a UBS icon asset path, or undefined if not found. */
export function resolveIconPath(name: string): string | undefined {
  const key = name.toLowerCase().replace(/\s+/g, '-') as UbsIconKey;
  return UBS_ICONS[key];
}

/** Pick a contextual illustration based on domain keywords. */
export function pickIllustration(domain: string, context: 'hero' | 'card' | 'about' | 'dashboard' | 'form' | 'support' | 'footer'): string {
  const d = domain.toLowerCase();

  if (context === 'hero') {
    if (d.includes('wealth') || d.includes('portfolio') || d.includes('invest')) return UBS_ILLUSTRATIONS.finance.investment;
    if (d.includes('support') || d.includes('help')) return UBS_ILLUSTRATIONS.general.helpDesk;
    if (d.includes('payment') || d.includes('transfer')) return UBS_ILLUSTRATIONS.finance.transfer;
    if (d.includes('security') || d.includes('identity')) return UBS_ILLUSTRATIONS.topics.security;
    if (d.includes('banking') || d.includes('bank')) return UBS_ILLUSTRATIONS.finance.bank;
    return UBS_ILLUSTRATIONS.finance.bank;
  }

  if (context === 'dashboard') {
    if (d.includes('wealth') || d.includes('portfolio')) return UBS_ILLUSTRATIONS.finance.portfolioMan;
    if (d.includes('transaction')) return UBS_ILLUSTRATIONS.finance.transactions;
    return UBS_ILLUSTRATIONS.finance.dashboard;
  }

  if (context === 'card') {
    if (d.includes('payment')) return UBS_ILLUSTRATIONS.finance.payment;
    if (d.includes('saving')) return UBS_ILLUSTRATIONS.finance.savings;
    if (d.includes('security')) return UBS_ILLUSTRATIONS.topics.security;
    if (d.includes('report')) return UBS_ILLUSTRATIONS.finance.reporting;
    return UBS_ILLUSTRATIONS.finance.investment;
  }

  if (context === 'about') {
    return UBS_ILLUSTRATIONS.general.teamSuccess;
  }

  if (context === 'form') {
    if (d.includes('identity') || d.includes('onboard')) return UBS_ILLUSTRATIONS.identity.confirmIdentity;
    return UBS_ILLUSTRATIONS.general.desk;
  }

  if (context === 'support') {
    return UBS_ILLUSTRATIONS.general.helpDesk;
  }

  if (context === 'footer') {
    return UBS_ILLUSTRATIONS.cities.zurich;
  }

  return UBS_ILLUSTRATIONS.finance.bank;
}

/** Pick a set of content block illustrations for an about section. */
export function pickAboutIllustrations(): [string, string, string] {
  return [
    UBS_ILLUSTRATIONS.general.teamSuccess,
    UBS_ILLUSTRATIONS.general.rocketFly,
    UBS_ILLUSTRATIONS.finance.target,
  ];
}

/** Pick a city skyline illustration. Returns Zurich by default. */
export function pickCitySkyline(city?: string): string {
  if (!city) return UBS_ILLUSTRATIONS.cities.zurich;
  const c = city.toLowerCase();
  for (const [key, path] of Object.entries(UBS_ILLUSTRATIONS.cities)) {
    if (c.includes(key.toLowerCase())) return path;
  }
  return UBS_ILLUSTRATIONS.cities.london;
}
