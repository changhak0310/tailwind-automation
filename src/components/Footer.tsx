
export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-700">
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="text-neutral-500 text-sm mb-3">© 2025 StreamHub. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-neutral-500 hover:text-primary-500 transition text-sm">
            이용약관
          </a>
          <a href="#" className="text-neutral-500 hover:text-primary-500 transition text-sm">
            개인정보 처리방침
          </a>
          <a href="#" className="text-neutral-500 hover:text-primary-500 transition text-sm">
            고객센터
          </a>
        </div>
      </div>
    </footer>
  )
}
