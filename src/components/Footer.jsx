// src/components/SiteFooter.jsx
export default function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Primary site footer">
      <img
        src="/images/ui/footer_cropped.webp"
        className="img-responsive"
        aria-hidden="true"
        loading="lazy"
      />
      <div className="copyright">
        <span>&copy;</span> {new Date().getFullYear()} Luke Michaels
      </div>
    </footer>
  );
}
