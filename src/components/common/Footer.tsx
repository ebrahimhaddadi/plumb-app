export default function Footer() {
    return (
        <footer className="bg-white border-t text-sm text-gray-500 mt-8 shadow-inner">
            <div className="container mx-auto px-4 py-6 text-center rtl:text-right ltr:text-left">
                <p>
                    © {new Date().getFullYear()} تمام حقوق این وب‌سایت متعلق به{" "}
                    <span className="font-medium text-gray-700">املاک علیرضا</span> می‌باشد.
                </p>
            </div>
        </footer>
    )
}
