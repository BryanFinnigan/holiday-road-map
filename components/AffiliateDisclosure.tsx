type AffiliateDisclosureProps = {
  showPlaceholderNote?: boolean;
  showLocalNote?: boolean;
};

export default function AffiliateDisclosure({ showPlaceholderNote = true, showLocalNote = false }: AffiliateDisclosureProps) {
  return (
    <aside className="disclosure" aria-label="Affiliate and availability disclosure">
      <strong>Affiliate disclosure:</strong> Some pages may contain affiliate links. If you buy through those links, Holiday Road Map may earn a commission at no extra cost to you. Prices, availability, shipping dates, and retailer terms can change.
      {showPlaceholderNote ? " Placeholder recommendations are editorial samples until real retailer links are added." : null}
      {showLocalNote ? " Local event details should be verified with official sources before making plans." : null}
    </aside>
  );
}
