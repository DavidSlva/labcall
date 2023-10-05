export default function SignInLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
                </div>
            </main>
        </div>
    );
}
