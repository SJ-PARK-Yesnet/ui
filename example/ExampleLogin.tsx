import { useState } from "react";

export default function ExampleLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 가짜 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
    }, 1200);
  };

  const handleSocialLogin = (provider: "google" | "kakao") => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError(provider + " 로그인은 샘플입니다.");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-8 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="flex justify-center">
            <img src="/logo.png" alt="CODAI Logo" width={240} height={80} className="h-auto cursor-pointer" />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Welcome.</h1>
            <p className="text-[#89a0b0]">Everything you need in an easily customizable dashboard.</p>
          </div>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">이메일</label>
              <input
                type="email"
                id="email"
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">비밀번호</label>
              <input
                type="password"
                id="password"
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-[#4c555e] hover:text-[#3a424a]">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 w-full bg-[#4c555e] hover:bg-[#3a424a] text-white py-3"
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </button>
          </form>

          {/* 소셜 로그인 섹션 */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white text-sm text-[#89a0b0]">SNS 계정으로 로그인</span>
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <button
                type="button"
                onClick={() => handleSocialLogin('google')}
                disabled={isLoading}
                className="flex-1 h-10 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex justify-center items-center h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"/>
                    <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"/>
                    <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"/>
                    <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"/>
                  </svg>
                </div>
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin('kakao')}
                disabled={isLoading}
                className="flex-1 h-10 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex justify-center items-center h-full">
                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 0C4.92486 0 0 4.02944 0 9C0 11.3932 1.26125 13.5352 3.24677 15C2.73387 16.6496 1.67148 18.0016 0.144391 18.9984C0.0642328 19.0512 0.0128174 19.1344 0.00137399 19.2272C-0.0100694 19.32 0.0192542 19.4128 0.0834646 19.4816C0.147675 19.5504 0.240282 19.5888 0.336889 19.5888C0.346638 19.5888 0.356387 19.5888 0.366136 19.5872C0.405633 19.5824 4.10424 19.2272 6.44311 17.4C7.90551 17.7936 9.43816 18 11 18C17.0751 18 22 13.9706 22 9C22 4.02944 17.0751 0 11 0Z" fill="black"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <span className="text-[#89a0b0]">계정이 없으신가요?</span>
            <a href="#" className="ml-1 text-[#1976d2] hover:underline">회원가입</a>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-[#89a0b0]">
          <p>© 2024 Yesnet Corp. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:underline">회사소개</a>
            <a href="#" className="hover:underline">이용약관</a>
            <a href="#" className="hover:underline">개인정보처리방침</a>
            <a href="#" className="hover:underline">문의하기</a>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" aria-label="Homepage">
              <img src="/Homepage.svg" alt="Homepage" width={20} height={20} />
            </a>
            <a href="#" aria-label="Blog">
              <img src="/Blog.svg" alt="Blog" width={20} height={20} />
            </a>
            <a href="#" aria-label="Youtube">
              <img src="/Youtube.svg" alt="Youtube" width={20} height={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-1/2 bg-[#f8f9fa]">
        {/* 오른쪽 배경/이미지 영역 (필요시 추가) */}
      </div>
    </div>
  );
} 