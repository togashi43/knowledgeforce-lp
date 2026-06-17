import { useState, useMemo } from "react";
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  HelpCircle, 
  Calculator, 
  Bot, 
  Sparkles, 
  Users, 
  Layers, 
  Smartphone, 
  CreditCard, 
  MessageSquare, 
  Lightbulb, 
  TrendingUp, 
  ShieldCheck, 
  FileText, 
  Clock, 
  Video, 
  Activity, 
  Repeat, 
  Zap, 
  Smile, 
  Share2, 
  Cpu,
  Minus,
  CheckCircle2,
  CheckSquare,
  AlertCircle,
  Database,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
  SheetClose
} from "@/components/ui/sheet";

// 透過処理された新しいアイコンとロゴのURL (青文字ロゴに変更)
const LOGO_URL = "/manus-storage/knowledgeforce-header-logo-blue_463e0e4f.png";
const ICON_URL = "/manus-storage/knowledgeforce-icon-trimmed_5be8f64b.png";
// ダッシュボードスクリーンショット画像URL
const DASHBOARD_MAIN_URL = "/manus-storage/dashboard-main_8b682229.png";
const DASHBOARD_STATS_URL = "/manus-storage/dashboard-stats_a7f2091e.png";

export default function Home() {
  // 料金トグル (年払い/月払い)
  const [isAnnual, setIsAnnual] = useState(true);

  // シミュレーターのステート
  const [students, setStudents] = useState(100);
  const [currentCost, setCurrentCost] = useState(100000); // 現在の月額コスト(円)

  // シミュレーター計算
  const calculatedSavings = useMemo(() => {
    // KNOWLEDGE FORCE スタンダードプラン(年払い)は月額 15,840円相当
    const kfCost = 15840;
    // 運営工数の削減分（月50時間想定、時給2000円換算 = 10万円分の人件費削減）
    const laborSaving = 100000; 
    const monthlySaving = (currentCost + laborSaving) - kfCost;
    const annualSaving = monthlySaving * 12;
    return {
      monthly: Math.max(0, monthlySaving),
      annual: Math.max(0, annualSaving)
    };
  }, [currentCost]);

  // FAQアコーディオンのステート
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // 主要機能詳細のステート
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  const handleCtaClick = () => {
    toast.success("30日間無料お試しにお申し込みいただきありがとうございます！アカウント作成画面へ移行します。", {
      description: "すべての機能と300クレジットが今すぐご利用いただけます。",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. ヘッダー */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="container max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="KnowledgeForce Logo" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                // 万が一読み込めない場合のフォールバック
                e.currentTarget.src = "https://placehold.co/200x50/0077ff/ffffff?text=KnowledgeForce";
              }}
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#flywheel" className="hover:text-blue-600 transition-colors">進化ロジック</a>
            <a href="#features" className="hover:text-blue-600 transition-colors">6つの機能</a>
            <a href="#saas-cases" className="hover:text-blue-600 transition-colors">活用事例</a>
            <a href="#credits" className="hover:text-blue-600 transition-colors">AIクレジット</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">料金プラン</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">よくある質問</a>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Button 
              onClick={handleCtaClick}
              className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 active:scale-95 transition-all duration-200 text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2"
            >
              30日間無料で試す
            </Button>

            {/* モバイル用ハンバーガーメニュー */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-slate-600 hover:text-blue-600">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white text-slate-800">
                <div className="flex flex-col gap-6 pt-10">
                  <SheetTitle className="text-left text-lg font-bold text-slate-900 border-b pb-4">
                    メニュー
                  </SheetTitle>
                  <nav className="flex flex-col gap-4 text-base font-medium">
                    <SheetClose asChild>
                      <a href="#flywheel" className="hover:text-blue-600 transition-colors py-2 border-b border-slate-50">進化ロジック</a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="#features" className="hover:text-blue-600 transition-colors py-2 border-b border-slate-50">6つの機能</a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="#saas-cases" className="hover:text-blue-600 transition-colors py-2 border-b border-slate-50">活用事例</a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="#credits" className="hover:text-blue-600 transition-colors py-2 border-b border-slate-50">AIクレジット</a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="#pricing" className="hover:text-blue-600 transition-colors py-2 border-b border-slate-50">料金プラン</a>
                    </SheetClose>
                    <SheetClose asChild>
                      <a href="#faq" className="hover:text-blue-600 transition-colors py-2 border-b border-slate-50">よくある質問</a>
                    </SheetClose>
                  </nav>
                  <SheetClose asChild>
                    <Button 
                      onClick={handleCtaClick}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md rounded-full py-3 mt-4"
                    >
                      30日間無料で試す
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* 2. ヒーローセクション (ファーストビュー) */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/50">
        {/* 背景の装飾用グラデーション光 */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl -z-10" />
        
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* 左側：キャッチコピーと導入文 (PCで左、スマホで上) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
              <div>
                <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 rounded-full inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
                  教育・コンテンツ販売事業の次世代オールインワン
                </Badge>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight break-keep">
                  創造、構築、提供を
                  <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    一気通貫で最適に。
                  </span>
                </h1>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                KnowledgeForce（ナレッジフォース）は、教材の創造から、会員サイト・LPの構築、そしてLINEや決済、AIによる個別学習サポートまですべてを1つに統合した、事業者と受講生のための次世代AIインフラです。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleCtaClick}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base md:text-lg rounded-full px-6 py-5 sm:px-8 sm:py-6 w-full sm:w-auto shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 active:scale-95 transition-all duration-200 group whitespace-normal sm:whitespace-nowrap h-auto min-h-[50px]"
                >
                  KNOWLEDGE FORCEを30日間無料で始める
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </div>

              {/* クイック実績スタッツ (スマホでも美しく並ぶ仕様、要望通り修正) */}
              <div className="pt-6 sm:pt-8 border-t border-slate-100 grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-lg sm:text-xl md:text-2xl font-black text-blue-600 leading-tight">スクール事業特化のAI SaaS</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-1 leading-snug">業界に完全にアジャストされた設計</div>
                </div>
                <div className="text-center lg:text-left border-l border-slate-100 pl-4">
                  <div className="text-lg sm:text-xl md:text-2xl font-black text-blue-600 leading-tight">ツールの一元化によりデータも一元管理</div>
                  <div className="text-[10px] sm:text-xs text-slate-500 mt-1 leading-snug">散らばったデータを1つに集約</div>
                </div>
              </div>
            </div>

            {/* 右側：ロゴとグラフィック (PCで右、スマホで下) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center lg:text-left w-full">
              <div className="relative p-5 sm:p-8 md:p-12 bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 max-w-[320px] sm:max-w-md w-full">
                <img 
                  src={ICON_URL} 
                  alt="KnowledgeForce Icon" 
                  className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto object-contain drop-shadow-xl animate-pulse"
                  style={{ animationDuration: '3s' }}
                />
                <div className="mt-5 sm:mt-8 text-center">
                  <span className="text-[10px] sm:text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2.5 py-1 rounded-full">
                    AI-Native Platform
                  </span>
                  <h3 className="mt-2 sm:mt-3 text-lg sm:text-2xl font-bold text-slate-800">KnowledgeForce</h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-500">
                    教育・コンテンツビジネスの未来を創るAIシステム
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 最大の魅力：「使えば使うほど進化する」データフライホイールロジック */}
      <section id="flywheel" className="py-20 bg-white relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-blue-50 text-blue-700 border-none px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
              THE CORE VALUE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              使えば使うほど、AIがあなた仕様に。
              <span className="block mt-2 text-blue-600">ビジネスが自走する「データフライホイール」</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              KnowledgeForceの最大の魅力は、ただのツールではないという点です。
              受講生の行動や質問が蓄積されるほど、AIがあなたのメソッドを学習し、自動でサービス品質と成約率が向上する循環が生まれます。
            </p>
          </div>

          {/* フライホイール図解 (インタラクティブな循環モデル) */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-3xl p-8 md:p-12 border border-blue-100/50 max-w-5xl mx-auto shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* 左側：循環の視覚的表現 */}
              <div className="lg:col-span-6 flex justify-center py-6 sm:py-0 overflow-hidden w-full">
                <div className="relative w-[290px] h-[290px] sm:w-96 sm:h-96 flex items-center justify-center scale-[0.9] sm:scale-100 transition-transform duration-300">
                  {/* 中央のコア */}
                  <div className="absolute w-20 h-20 sm:w-32 sm:h-32 bg-white rounded-full shadow-lg border border-blue-100 flex flex-col items-center justify-center z-10">
                    <img src={ICON_URL} alt="KF" className="w-8 h-8 sm:w-14 sm:h-10 object-contain" />
                    <span className="text-[9px] sm:text-xs font-bold text-blue-600 mt-1">学習AI頭脳</span>
                  </div>

                  {/* 循環する軌道とステップ */}
                  <div className="absolute inset-0 border-4 border-dashed border-blue-200 rounded-full animate-spin" style={{ animationDuration: '60s' }} />

                  {/* ステップ1: 知見のインプット (上) */}
                  <div className="absolute -top-3 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-1.5 sm:gap-2 z-10 hover:scale-105 transition-transform">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold">1</span>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-700">教材・知見の学習</span>
                  </div>

                  {/* ステップ2: エンドユーザー利用 (右) */}
                  <div className="absolute -right-3 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-1.5 sm:gap-2 z-10 hover:scale-105 transition-transform">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold">2</span>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-700">受講生が質問・学習</span>
                  </div>

                  {/* ステップ3: ログの蓄積 (下) */}
                  <div className="absolute -bottom-3 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-1.5 sm:gap-2 z-10 hover:scale-105 transition-transform">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold">3</span>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-700">行動・対話ログの蓄積</span>
                  </div>

                  {/* ステップ4: AIの進化と改善提案 (左) */}
                  <div className="absolute -left-3 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-1.5 sm:gap-2 z-10 hover:scale-105 transition-transform">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold">4</span>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-700">自動改善＆売上向上</span>
                  </div>
                </div>
              </div>

              {/* 右側：詳細ロジック説明 */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <Repeat className="w-6 h-6 text-blue-600 animate-spin" style={{ animationDuration: '10s' }} />
                  データがデータ呼ぶ、無限成長モデル
                </h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">あなたの知見を1回教えるだけ</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        会員サイトにアップロードした動画やテキストをAIが瞬時に分析。あなた独自の「学習済みAI」が構築されます。
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">受講生が使うほど「記憶」が育つ</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        受講生がAIチャットボットと会話したり、教材を閲覧したりするたびに、その質問ログや躓きポイントが自動蓄積されます。
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">AIから運営者へ「改善提案」を通知</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        「受講生の30%が第3章で躓いています。LINEでこの補足メッセージを配信しませんか？」とAIが自発的に提案。ビジネスが自動で最適化されます。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-blue-100 flex items-center gap-3">
                  <Smile className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <span className="text-xs text-slate-600 font-medium">
                    <strong>エンドユーザーに最大の価値提供：</strong>
                    質問への即時回答、パーソナライズされた復習レコメンドにより、受講生の満足度と継続率は極限まで高まります。
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3.5. どんなAIが使える？ (ChatGPT/Claude/Gemini比較とスクール特化型メリット) */}
      <section className="py-20 bg-slate-50 relative border-y border-slate-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-none px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
              WHICH AI CAN BE USED?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              どんなAIが使える？
              <span className="block mt-2 text-blue-600">主要3大AIをすべてKNOWLEDGE FORCEに集約</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              KNOWLEDGE FORCEなら、世界最高峰のAIモデルを個別に契約することなく、すべてこの管理画面1つから自由に切り替えてご利用いただけます。
            </p>
          </div>

          {/* 3大AI一元化のメリットカード */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            {/* メリット解説 */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                もう、複数のAIツールを個別に有料契約する必要はありません。
              </h3>
              <p className="text-slate-600 leading-relaxed">
                ChatGPT Plus、Claude Pro、Gemini Advancedを個別に契約すると、<strong>毎月約9,000円以上（各約$20）の固定費</strong>がかかります。
              </p>
              <p className="text-slate-600 leading-relaxed">
                KNOWLEDGE FORCEは、これらすべてのAIエンジンをAPI経由でシステムに内蔵。あなたは月額利用料と付与されるAIクレジットだけで、状況や用途に合わせて最適なAIを使い分けることができます。
              </p>
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100/50 text-sm text-blue-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>圧倒的なコスト削減：</strong>
                  個別契約をすべて解約し、KNOWLEDGE FORCEに一本化することで、月々の固定費を大幅に浮かせることができます。
                </span>
              </div>
            </div>

            {/* 3大AIの対応表 */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-100 border border-slate-100 h-full flex flex-col justify-between">
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  利用可能な主要AIモデル一覧
                </h4>
                <div className="overflow-x-auto scrollbar-none">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400 font-medium">
                        <th className="py-3 px-2">AIモデル</th>
                        <th className="py-3 px-2">得意なタスク</th>
                        <th className="py-3 px-2 text-center">個別契約</th>
                        <th className="py-3 px-2 text-right text-blue-600 font-bold">KNOWLEDGE FORCE</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      <tr>
                        <td className="py-4 px-2 font-bold text-slate-800 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
                          ChatGPT (GPT-4o)
                        </td>
                        <td className="py-4 px-2 text-slate-600 text-xs sm:text-sm">論理的思考、プログラミング、構造化、アイデア出し</td>
                        <td className="py-4 px-2 text-center text-slate-400">約$20/月</td>
                        <td className="py-4 px-2 text-right text-blue-600 font-bold">標準搭載（無料）</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-2 font-bold text-slate-800 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
                          Claude 3.5 Sonnet
                        </td>
                        <td className="py-4 px-2 text-slate-600 text-xs sm:text-sm">自然で美しい日本語の執筆、長文の要約、高度な分析</td>
                        <td className="py-4 px-2 text-center text-slate-400">約$20/月</td>
                        <td className="py-4 px-2 text-right text-blue-600 font-bold">標準搭載（無料）</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-2 font-bold text-slate-800 flex items-center gap-2">
                          <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></span>
                          Gemini 1.5 Pro
                        </td>
                        <td className="py-4 px-2 text-slate-600 text-xs sm:text-sm">大量のドキュメント・動画データの超高速一括読み込み</td>
                        <td className="py-4 px-2 text-center text-slate-400">約$20/月</td>
                        <td className="py-4 px-2 text-right text-blue-600 font-bold">標準搭載（無料）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
                  ※各AIモデルの最新バージョンへ自動的にアップデートされます。
                </div>
              </div>
            </div>
          </div>

          {/* 汎用AI vs スクール特化AI の比較表 */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <span className="text-xs font-bold tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full text-blue-200">
                SPECIALIZED VS GENERAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-3">
                なぜ、通常のChatGPTではなく「KNOWLEDGE FORCE」なのか？
              </h3>
              <p className="text-blue-100 text-sm sm:text-base mt-3">
                ChatGPTなどの汎用AIは、指示（プロンプト）の出し方次第で精度が大きく変わります。
                KNOWLEDGE FORCEは、スクール・教育事業に完全にチューニングされているため、誰でも一瞬でプロレベルの成果物を得られます。
              </p>
            </div>

            <div className="overflow-x-auto scrollbar-none">
              <table className="w-full text-sm text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10 text-blue-200 font-medium">
                    <th className="py-3 px-4">比較項目</th>
                    <th className="py-3 px-4">通常のChatGPT（汎用AI）</th>
                    <th className="py-3 px-4 bg-white/10 text-white font-bold rounded-t-xl">KNOWLEDGE FORCE（スクール特化）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-4 px-4 font-bold">教育ビジネスの知識</td>
                    <td className="py-4 px-4 text-blue-100">一般的な回答のみ。スクール独自の悩みや集客ロジックは考慮されない。</td>
                    <td className="py-4 px-4 bg-white/10 font-medium">商品設計、集客、成約、CS対応まで、教育事業に特化したプロンプトとデータを内蔵。</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">受講生データの連携</td>
                    <td className="py-4 px-4 text-blue-100">不可能。受講生ごとの進捗や過去の質問履歴をAIに教え直す必要がある。</td>
                    <td className="py-4 px-4 bg-white/10 font-medium">会員サイト、LINE、進捗データが自動連携。受講生ごとの状況に合わせたパーソナライズ対応が可能。</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">教材のインプット</td>
                    <td className="py-4 px-4 text-blue-100">毎回手動でファイルをアップロードして指示を出す必要がある。</td>
                    <td className="py-4 px-4 bg-white/10 font-medium">会員サイトにアップした講義動画やテキストをAIが裏側で自動的に常時学習。</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">操作の難易度</td>
                    <td className="py-4 px-4 text-blue-100">「プロンプトエンジニアリング」を学び、長文の命令文を作る必要がある。</td>
                    <td className="py-4 px-4 bg-white/10 font-medium">ボタンを1クリック、または簡単な項目を入力するだけで、最適な目次やLP、配信文が完成。</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 会員サイト構築のAIサポート（労力1/2）＆CSチャットボット自動生成 */}
      <section className="py-20 bg-slate-50 relative border-y border-slate-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* 左側：説明テキスト */}
            <div className="lg:col-span-7 space-y-6">
              <Badge className="bg-blue-100 text-blue-800 border-none px-3 py-1 rounded-full text-xs font-bold">
                EASY & POWERFUL
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                講座コンテンツの構築も、
                <span className="block mt-1 text-blue-600">AIが目次から自動サポート</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                講座作成をする際も、AIによる強力なサポートが入るため、<strong>これまでの1/2の労力</strong>で完了します。
                AIを活用して講座コンテンツの目次を一瞬で作ることができ、ノウハウ動画をアップロードすればその後の展開はすべてAIが引き受けます。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800">AIによる講座目次作成</h4>
                  <p className="text-xs text-slate-500">
                    講座のテーマを伝えるだけで、AIが最適な講座コンテンツの目次を瞬時に自動生成します。
                  </p>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800">あなた専用のCSボット自動生成</h4>
                  <p className="text-xs text-slate-500">
                    構築された講座内容やLINEのテキストデータをAIが自動学習。24時間対応のあなた専用のCSチャットボットが即座に誕生します。
                  </p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100/50 text-sm text-blue-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>弊社の強みが生きる点：</strong>
                  従来のシステムのように「会員サイトを作った後に、別ツールでチャットボットを設定してデータを紐付ける」といった面倒な作業は一切不要。一気通貫だからこそ、アップロードした瞬間にすべてが繋がります。
                </span>
              </div>
            </div>

            {/* 右側：ビジュアル図解 */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 space-y-6">
                <h4 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <Video className="w-5 h-5 text-blue-600" />
                  一気通貫構築のフロー図
                </h4>

                <div className="space-y-6 relative">
                  {/* 縦のライン */}
                  <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-blue-100 -z-0" />

                  {/* ステップ1 */}
                  <div className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                      1
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800 text-sm">ノウハウ動画をアップロード</h5>
                      <p className="text-xs text-slate-500 mt-1">動画を会員サイトにドラッグ＆ドロップするだけ</p>
                    </div>
                  </div>

                  {/* ステップ2 */}
                  <div className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800 text-sm">AIが自動文字起こし＆学習</h5>
                      <p className="text-xs text-slate-500 mt-1">動画内の音声を自動解析し、教材データとして構造化</p>
                    </div>
                  </div>

                  {/* ステップ3 */}
                  <div className="flex gap-4 relative z-10">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800 text-sm">CSボット＆補助教材の自動生成</h5>
                      <p className="text-xs text-slate-500 mt-1">受講生用の24時間対応チャットボットと、要約テキストが即時完成</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-center">
                  <span className="text-xs text-slate-400 font-medium">作業工数を50%以上削減、構築スピードを2倍に</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. 独自SaaS構築・販売・業務活用（AIビルダー事例） */}
      <section id="saas-cases" className="py-20 bg-white relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-blue-50 text-blue-700 border-none px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
              USE CASES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              あなたの知見を「独自のSaaS」として構築・販売
              <span className="block mt-2 text-blue-600">無限に広がるAIビジネス活用事例</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              KnowledgeForceを使えば、自分独自のAIアプリ（SaaS）をノーコードで簡単に構築できます。
              受講生への提供、外部への販売、受託事業での品質統一など、あらゆるシーンでご活用いただけます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* 事例1 */}
            <Card className="p-6 bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-lg">
                  🥗
                </div>
                <h3 className="text-xl font-bold text-slate-800">ダイエット・ボディメイク</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>食事添削AIを構築して提供</strong>
                  <br />
                  受講生が毎日の食事写真を送ると、あなたのメソッドに基づいた栄養分析とアドバイスをAIが自動返信。24時間体制の専属トレーナーを自動化。
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100/80">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  顧客満足度＆継続率アップ
                </span>
              </div>
            </Card>

            {/* 事例2 */}
            <Card className="p-6 bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold text-lg">
                  🎨
                </div>
                <h3 className="text-xl font-bold text-slate-800">デザイン・クリエイティブ</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>サムネイル制作・添削AIの販売</strong>
                  <br />
                  あなたのデザインルールを学習したAIを「サムネ制作AI」として構築。受講生や外部のデザイナーに月額課金制（SaaS）として直接販売可能。
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100/80">
                <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">
                  新規サブスク収入源の構築
                </span>
              </div>
            </Card>

            {/* 事例3 */}
            <Card className="p-6 bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300 rounded-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg">
                  💼
                </div>
                <h3 className="text-xl font-bold text-slate-800">受託事業・制作プロダクション</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>社内用AIによる業務品質の統一</strong>
                  <br />
                  自社の制作ノウハウや品質基準をAIに学習させ、メンバーや外注パートナーに使用してもらうことで、教育コストをゼロにしつつ成果物の品質を完全に統一。
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100/80">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  業務効率化＆クオリティ標準化
                </span>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* 6. 6つの主要機能 (特徴、他社比較、おすすめな人、図解) */}
      <section id="features" className="py-20 bg-slate-50 relative border-t border-slate-100">
        <div className="container max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-blue-50 text-blue-700 border-none px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
              FEATURES DETAILED
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              事業を劇的に変える「6つの主要機能」
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              単なる機能の羅列ではありません。創造、構築、提供を一気通貫で繋ぎ、
              他社ツールでは実現できない「事業の自走化」を達成するための6つの柱です。
            </p>
          </div>

          {/* タブ切り替え式の詳細解説セクション */}
          <div className="max-w-6xl mx-auto">
            
            {/* タブヘッダー */}
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-3 mb-12 overflow-x-auto pb-3 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0 select-none">
	              {[
	                { label: "講座作成", icon: Layers },
	                { label: "ノーコードLP制作", icon: FileText },
	                { label: "ライン拡張機能", icon: Smartphone },
	                { label: "タスク管理機能", icon: CheckSquare },
	                { label: "カスタムCSボット", icon: MessageSquare },
	                { label: "データ一元管理", icon: Database },
	                { label: "AIエージェント", icon: Bot },
	              ].map((tab, idx) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveFeatureTab(idx)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                      activeFeatureTab === idx
                        ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-100"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* タブコンテンツ */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-100 border border-slate-100">
              
              {activeFeatureTab === 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                        <Layers className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">講座作成</h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      AIを活用して、講座コンテンツの目次を一瞬で自動作成することができます。動画教材のアップロードや知見のインプットをスムーズに行い、受講生が迷わず学べる洗練されたカリキュラム構成をAIが強力にサポートします。
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>AIによる目次生成：</strong> キーワードや対象読者を入力するだけで、教育効果の高い目次構成をAIが自動設計します。</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>他社との違い：</strong> 既存ツールは枠組みを提供するだけ。KNOWLEDGE FORCEは中身の企画段階からAIがアシストします。</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800">
                      <strong>【図解】講座作成アシスト：</strong>
                      「未経験向け動画編集スクール」と入力 ➔ AIが「基礎・実践・案件獲得」の体系的な目次案を5秒で自動生成
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm mb-3 text-center">実際のダッシュボード画面（受講者インサイト）</h4>
                    <img 
                      src={DASHBOARD_STATS_URL} 
                      alt="Dashboard Stats" 
                      className="w-full h-auto rounded-xl border border-slate-200/80 shadow-md object-contain max-h-[250px] mx-auto"
                    />
                  </div>
                </div>
              )}

              {activeFeatureTab === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                        <FileText className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">ノーコードLP制作</h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      AI事業相談チャットに講座コンセプトを伝えるだけで、売れるファネル構成に基づいたLP原稿・見出し・構成案を数秒でフル生成。ブロックを配置するだけで即公開できます。
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>他社との違い：</strong> STUDIO等はデザインのみ。KnowledgeForceは「売れるライティング原稿」自体をAIが自動生成します。</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>どんな人におすすめ：</strong> コピーライティングが苦手な方、LP制作に外注費や時間をかけたくない方。</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800">
                      <strong>【図解】LP自動構築：</strong>
                      チャットで「初心者向けデザイン講座」と入力 ➔ AIが「悩み訴求・ベネフィット・カリキュラム・価格提示」のLP構成と原稿を10秒で出力
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                    <h4 className="font-bold text-slate-800 text-sm">AI原稿生成プレビュー（イメージ）</h4>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-2">
                      <div className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Generated Headline</div>
                      <p className="text-xs font-bold text-slate-800 leading-relaxed">
                        「センス不要。30日でプロのスキルを身につける、実践型デザイン集中講座」
                      </p>
                      <div className="h-2 w-2/3 bg-slate-100 rounded-full" />
                      <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                </div>
              )}

              {activeFeatureTab === 2 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                        <Smartphone className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">ライン拡張機能</h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      既存のLINE拡張機能に備わっている強力なコミュニケーション・配信ツールをすべて標準搭載。1対1のチャットから大規模な自動ステップ配信まで、受講生との距離を縮め、成約率と満足度を最大化します。
                    </p>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>一対一のメッセージ</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>イベント予約機能</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>個別予約スケジュール</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>ウェビナー設定機能</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>顧客への自動タグ付け</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span>ステップ配信</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800">
                      <strong>一元化の強み：</strong>
                      LINE配信ツールと会員サイトが完全に紐付いているため、「まだ第2章を見ていない受講生だけ」にピンポイントでステップ配信を送るなど、超高度なセグメント配信がノーコードで可能です。
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm mb-3 text-center">LINEステップ配信・連携（イメージ）</h4>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-3 shadow-sm text-xs">
                      <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                        <span className="font-bold text-slate-800">LINEステップ配信シナリオ</span>
                      </div>
                      <div className="space-y-2 text-slate-600">
                        <div className="p-2 bg-blue-50/50 rounded border border-blue-100">
                          <div className="font-bold text-blue-700 text-[10px]">1日目（自動送信）</div>
                          <p className="text-[11px] mt-0.5">「ご登録ありがとうございます！まずはこちらの解説動画をご覧ください。」</p>
                        </div>
                        <div className="p-2 bg-slate-50 rounded border border-slate-100">
                          <div className="font-bold text-slate-500 text-[10px]">3日目（自動送信）</div>
                          <p className="text-[11px] mt-0.5">「講座の進捗はいかがですか？第1章を完了した方へ、個別予約の案内です。」</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeatureTab === 3 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                        <CheckSquare className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">タスク管理機能</h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      スクール運営チームや外注メンバー、講師陣が「今、何を、どこまで進めているか」を直感的に把握できるタスク管理システムを搭載。タスクを振りたい相手にワンクリックで割り振りができ、全体の進捗状況も一目で把握できます。
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>チーム・外注の可視化：</strong> 散らばりがちな外注パートナーや講師陣の業務状況を、別ツールを使わずに1箇所で完全に追跡。</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>簡単なタスク割り振りと進捗管理：</strong> 割り振りたい担当者を選んでタスクを作成するだけで、進捗の完了・未完了がリアルタイムに同期。</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800">
                      <strong>【図解】タスク割り振りの流れ：</strong>
                      新規講義のアップロードタスクを作成 ➔ 担当講師に割り振り ➔ 講師が完了すると自動的に会員サイト側のステータスも更新
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm mb-3 text-center">タスク管理ボード（イメージ）</h4>
                    <div className="space-y-2 text-xs">
                      <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center shadow-sm">
                        <span className="font-bold text-slate-800">第3章スライドの最終チェック</span>
                        <span className="text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-bold">進行中 (担当: 佐藤)</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center shadow-sm">
                        <span className="font-bold text-slate-800">受講生質問回答（LINE）</span>
                        <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-bold">未着手 (担当: 田中)</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center shadow-sm">
                        <span className="font-bold text-slate-800">今週の売上レポート作成</span>
                        <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded-full font-bold">完了 (担当: 鈴木)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeatureTab === 4 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">カスタムCSボット</h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      会員サイトの内容やLINEのテキストなど、KNOWLEDGE FORCEにアップされたすべてのデータをもとに、あなた専用のチャットボットが自動で作られる設計になっています。
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>講師の人件費を劇的に削減：</strong> これまで月20万円で質問回答の講師を雇っていたスクールでも、月額利用料とAIクレジットだけで同等以上のクオリティの回答を24時間体制で担えます。</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>あなた自身の知見に準拠：</strong> 汎用AIのように勝手な嘘を答えることなく、あなたの教材データ・LINEテキストのみから100%正確に回答。</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800">
                      <strong>【コスト比較】人件費 vs AIクレジット：</strong>
                      質問対応講師（月給20万円）➔ KNOWLEDGE FORCE（月額料金 ＋ AIクレジット消費）で実質人件費をほぼゼロに。
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm mb-3 text-center">AIアシスタント対話（実際の画面）</h4>
                    <img 
                      src={DASHBOARD_MAIN_URL} 
                      alt="Dashboard Chatbot" 
                      className="w-full h-auto rounded-xl border border-slate-200/80 shadow-md object-contain max-h-[250px] mx-auto"
                    />
                  </div>
                </div>
              )}

              {activeFeatureTab === 5 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                        <Database className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">データ一元管理</h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      会員サイトの学習進捗、LINEの配信・反応ログ、決済データ、CSチャットの質問履歴まで、あらゆる受講生データを1つのダッシュボードに自動で一元管理。ツールの一元化により、バラバラだったデータを1つに集約し、データのサイロ化を完全に解消します。
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>CSV連携や手動突合が不要：</strong> 各種ツールを別々で契約している時のように、データを手動で突合する必要がありません。すべてがリアルタイムに自動連携。</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>受講生の状況を瞬時に把握：</strong> 誰が、どの講義で、何回質問し、どのようなLINE反応をしているかが1枚のプロファイルに集約されます。</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800">
                      <strong>【図解】データ一元管理：</strong>
                      受講生の学習ログ（会員サイト） ➔ LINE反応 ➔ 質問履歴（CSボット）が1つの個人プロファイルに自動集約。
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm mb-3 text-center">実際のダッシュボード画面（一元管理）</h4>
                    <img 
                      src={DASHBOARD_MAIN_URL} 
                      alt="Dashboard Main" 
                      className="w-full h-auto rounded-xl border border-slate-200/80 shadow-md object-contain max-h-[250px] mx-auto"
                    />
                  </div>
                </div>
              )}

              {activeFeatureTab === 6 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                        <Bot className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">AIエージェント</h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      スクール事業や教育事業における豊富な知見とノウハウをベースに設計された「専用AIエージェント」を標準搭載。汎用的な回答ではなく、スクールビジネスの成果を出すためのプロレベルのアシストが受けられます。
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>商品設計エージェント：</strong> ターゲット層や強みを伝えるだけで、高単価でも売れる教育カリキュラムや講座商品を自動設計。</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>集客・セールスエージェント：</strong> LINEステップ配信の構成、個別面談の台本、ウェビナーのスライド構成など、集客と成約に必要なあらゆる施策をフルサポート。</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800">
                      <strong>【図解】エージェント活用：</strong>
                      「デザインスクールの集客LPの訴求案が欲しい」➔ 集客エージェントが、教育業界で実績のある訴求パターンを10秒で3案自動作成
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm mb-3 text-center">AIエージェント一覧（実際の画面）</h4>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-2 shadow-sm text-xs">
                      <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                        <Bot className="w-4 h-4 text-blue-600" />
                        <span className="font-bold text-slate-800">搭載済みAIエージェント</span>
                      </div>
                      <div className="grid grid-cols-1 gap-1.5 text-slate-600">
                        <div className="flex justify-between items-center p-1.5 bg-slate-50 rounded">
                          <span>📊 商品コンセプトAI</span>
                          <span className="text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">基本搭載</span>
                        </div>
                        <div className="flex justify-between items-center p-1.5 bg-slate-50 rounded">
                          <span>📝 講義作成AI</span>
                          <span className="text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">基本搭載</span>
                        </div>
                        <div className="flex justify-between items-center p-1.5 bg-slate-50 rounded">
                          <span>📄 LP台本AI</span>
                          <span className="text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">基本搭載</span>
                        </div>
                        <div className="flex justify-between items-center p-1.5 bg-slate-50 rounded">
                          <span>📱 インスタグラムAI</span>
                          <span className="text-[9px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-bold">基本搭載</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 7. AIクレジット比較セクション (経済合理性の訴求) */}
      <section id="credits" className="py-20 bg-white relative">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-blue-50 text-blue-700 border-none px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
              ECONOMIC FEASIBILITY
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              外注費・人件費を99%削減。
              <span className="block mt-2 text-blue-600">圧倒的な経済合理性を生む「AIクレジット」</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              KnowledgeForceのAI機能は、共通の「クレジット（1cr ＝ 実質約¥5）」を消費して実行されます。
              これまで数十万円かけて外注していた作業が、わずか数十円〜数百円のクレジット消費で、しかも一瞬で完了します。
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-6 text-sm font-bold text-slate-700">実行するタスク</th>
                  <th className="p-6 text-sm font-bold text-slate-700">従来の外注費・人件費</th>
                  <th className="p-6 text-sm font-bold text-blue-600">消費クレジット (実質費用)</th>
                  <th className="p-6 text-sm font-bold text-emerald-600 text-right">削減効果</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm">
                <tr>
                  <td className="p-6 font-bold text-slate-800">教材・カリキュラム構成の作成 (1式)</td>
                  <td className="p-6 text-slate-500">¥50,000 〜 ¥150,000</td>
                  <td className="p-6 font-bold text-blue-600">5 cr <span className="text-xs text-slate-400 font-normal">(約¥25)</span></td>
                  <td className="p-6 font-bold text-emerald-600 text-right">99.9% 削減</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-800">LP原稿のフル構成生成 (1本)</td>
                  <td className="p-6 text-slate-500">¥100,000 〜 ¥300,000</td>
                  <td className="p-6 font-bold text-blue-600">10 cr <span className="text-xs text-slate-400 font-normal">(約¥50)</span></td>
                  <td className="p-6 font-bold text-emerald-600 text-right">99.9% 削減</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-800">セミナー・動画講義の台本作成 (1本)</td>
                  <td className="p-6 text-slate-500">¥150,000 〜 ¥300,000</td>
                  <td className="p-6 font-bold text-blue-600">30 cr <span className="text-xs text-slate-400 font-normal">(約¥150)</span></td>
                  <td className="p-6 font-bold text-emerald-600 text-right">99.9% 削減</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-800">LINE配信文・訴求案の作成 (1本)</td>
                  <td className="p-6 text-slate-500">¥5,000 〜 ¥10,000</td>
                  <td className="p-6 font-bold text-blue-600">1 cr <span className="text-xs text-slate-400 font-normal">(約¥5)</span></td>
                  <td className="p-6 font-bold text-emerald-600 text-right">99.9% 削減</td>
                </tr>
                <tr>
                  <td className="p-6 font-bold text-slate-800">CSチャットボットによる自動回答 (1,000件)</td>
                  <td className="p-6 text-slate-500">¥150,000 相当 <span className="text-xs text-slate-400 font-normal">(人件費)</span></td>
                  <td className="p-6 font-bold text-blue-600">50 cr <span className="text-xs text-slate-400 font-normal">(約¥250)</span></td>
                  <td className="p-6 font-bold text-emerald-600 text-right">99.8% 削減</td>
                </tr>
              </tbody>
            </table>
            
            <div className="p-6 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
              <span>※1クレジットは実質約¥5相当として計算。</span>
              <span className="font-medium text-slate-600">未使用クレジットは翌月に繰越可能（最大2ヶ月分までストック）</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 費用削減シミュレーター (インタラクティブ) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            
            {/* 左側：シミュレーターの操作 */}
            <div className="lg:col-span-6 space-y-6">
              <Badge className="bg-blue-100 text-blue-800 border-none px-3 py-1 rounded-full text-xs font-bold">
                SIMULATOR
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                あなたのスクールの
                <span className="block mt-1 text-blue-600">「削減コスト」を今すぐ計算</span>
              </h2>
              <p className="text-slate-600">
                現在の受講生数と、毎月支払っているツール代をスライドさせてみてください。
                KnowledgeForceを導入することで、どれだけのコストと時間が浮くのかをリアルタイムでシミュレーションします。
              </p>

              <div className="space-y-6 pt-4">
                {/* スライダー1：受講生数 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-slate-700">
                    <span>現在の受講生・会員数</span>
                    <span className="text-blue-600 text-base">{students} 人</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="1000" 
                    step="10"
                    value={students} 
                    onChange={(e) => setStudents(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>10人</span>
                    <span>500人</span>
                    <span>1000人</span>
                  </div>
                </div>

                {/* スライダー2：現在の月額ツール代 */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-bold text-slate-700">
                    <span>現在支払っている月額ツール費用</span>
                    <span className="text-blue-600 text-base">{currentCost.toLocaleString()} 円</span>
                  </div>
                  <input 
                    type="range" 
                    min="10000" 
                    max="300000" 
                    step="5000"
                    value={currentCost} 
                    onChange={(e) => setCurrentCost(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>1万円</span>
                    <span>15万円</span>
                    <span>30万円</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：計算結果 */}
            <div className="lg:col-span-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 space-y-6 text-center">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  Estimated Savings
                </span>
                
                <div>
                  <div className="text-sm text-slate-500 font-medium">年間で削減できる総コスト（工数人件費含む）</div>
                  <div className="text-4xl md:text-5xl font-black text-blue-600 mt-2">
                    約 {calculatedSavings.annual.toLocaleString()} <span className="text-2xl font-bold">円 / 年</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-slate-100">
                  <div className="text-center sm:text-left p-4 bg-slate-50 rounded-2xl">
                    <div className="text-[10px] text-slate-400 font-bold">月間の削減コスト</div>
                    <div className="text-base sm:text-lg font-bold text-slate-700 mt-1">
                      {calculatedSavings.monthly.toLocaleString()} 円
                    </div>
                  </div>
                  <div className="text-center sm:text-left p-4 bg-slate-50 rounded-2xl flex flex-col justify-center">
                    <div className="text-[10px] text-slate-400 font-bold">浮いた時間でできること</div>
                    <div className="text-xs font-bold text-blue-600 mt-1">
                      新規集客・コンテンツ企画
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  ※運営者の運用工数・スタッフ人件費として、月額100,000円相当（時給2,000円×50時間）の削減効果を自動加算して計算しています。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. 料金プランセクション (エンタープライズ追加、4プラン体系) */}
      <section id="pricing" className="py-20 bg-white relative">
        <div className="container max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="bg-blue-50 text-blue-700 border-none px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
              PRICING PLANS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              事業の成長ステージに合わせた4つのプラン
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              月額利用、年払いの2つから選べます。年払いをお選びいただくと、<strong>特典として「100クレジット」を特別付与</strong>いたします！
            </p>

            {/* 料金切り替えトグル */}
            <div className="mt-8 inline-flex items-center gap-3 bg-slate-100 p-1 rounded-full">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  !isAnnual ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                月払い
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isAnnual ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"
                }`}
              >
                年払い
                <span className="bg-white text-blue-600 text-[9px] font-black px-1.5 py-0.5 rounded-full">
                  特典 +100cr
                </span>
              </button>
            </div>
          </div>

          {/* 4つの料金プランカード */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
            
	            {/* プラン1：ベーシック */}
	            <Card className="p-6 bg-white border border-slate-100 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all duration-300">
	              <div className="space-y-4">
	                <div className="text-slate-500 text-xs font-bold tracking-wider uppercase">ベーシック</div>
	                <h3 className="text-xl font-bold text-slate-800">これから始める方</h3>
	                
	                <div className="py-4">
	                  <span className="text-3xl font-black text-slate-900">
	                    ¥9,800
	                  </span>
	                  <span className="text-xs text-slate-400"> / 月 (税込)</span>
	                  {isAnnual && <div className="text-[10px] text-blue-600 font-bold mt-1">※年払い特典：100cr付与</div>}
	                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  個人コンテンツホルダーや、まずはスモールスタートでAI会員サイトを立ち上げたい方に最適です。
                </p>

                <div className="pt-4 border-t border-slate-50 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>受講生数：最大30人</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>動画ホスティング：100GB</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>LP作成数：最大5枚</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="font-bold text-blue-600">AIクレジット：300 cr / 月</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  onClick={handleCtaClick}
                  variant="outline"
                  className="w-full rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 font-bold py-5 text-xs"
                >
                  30日間無料で試す
                </Button>
              </div>
            </Card>

	            {/* プラン2：スタンダード（人気） */}
	            <Card className="p-6 bg-white border-2 border-blue-500 rounded-3xl flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-50/50 transition-all duration-300 relative">
	              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black tracking-widest px-4 py-1 rounded-full uppercase shadow-md">
	                POPULAR
	              </div>
	              
	              <div className="space-y-4 mt-2">
	                <div className="text-blue-600 text-xs font-bold tracking-wider uppercase">スタンダード</div>
	                <h3 className="text-xl font-bold text-slate-800">立ち上げを加速したい方</h3>
	                
	                <div className="py-4">
	                  <span className="text-3xl font-black text-slate-900">
	                    ¥19,800
	                  </span>
	                  <span className="text-xs text-slate-400"> / 月 (税込)</span>
	                  {isAnnual && <div className="text-[10px] text-blue-600 font-bold mt-1">※年払い特典：100cr付与</div>}
	                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  本格的にオンラインスクールを運営し、LINE自動連携や解約予兆分析AIを駆使して売上を最大化させたい方。
                </p>

                <div className="pt-4 border-t border-slate-50 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>受講生数：最大100人</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>動画ホスティング：300GB</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>LP作成数：最大15枚</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="font-bold text-blue-600">AIクレジット：1,000 cr / 月</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">解約予兆分析AI搭載</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  onClick={handleCtaClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 text-xs rounded-full shadow-lg shadow-blue-100"
                >
                  30日間無料で試す
                </Button>
              </div>
            </Card>

	            {/* プラン3：プレミアム */}
	            <Card className="p-6 bg-white border border-slate-100 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all duration-300">
	              <div className="space-y-4">
	                <div className="text-slate-500 text-xs font-bold tracking-wider uppercase">プレミアム</div>
	                <h3 className="text-xl font-bold text-slate-800">大規模スクール・法人</h3>
	                
	                <div className="py-4">
	                  <span className="text-3xl font-black text-slate-900">
	                    ¥49,800
	                  </span>
	                  <span className="text-xs text-slate-400"> / 月 (税込)</span>
	                  {isAnnual && <div className="text-[10px] text-blue-600 font-bold mt-1">※年払い特典：100cr付与</div>}
	                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  大規模な会員制コミュニティ、複数の講座を並行して運用し、データ移行サポートを必要とする事業者に。
                </p>

                <div className="pt-4 border-t border-slate-50 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>受講生数：最大500人</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>動画ホスティング：1,000GB</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>LP作成数：最大50枚</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="font-bold text-blue-600">AIクレジット：3,000 cr / 月</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">専任担当者サポート</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  onClick={handleCtaClick}
                  variant="outline"
                  className="w-full rounded-full border-blue-200 text-blue-600 hover:bg-blue-50 font-bold py-5 text-xs"
                >
                  30日間無料で試す
                </Button>
              </div>
            </Card>

            {/* プラン4：エンタープライズ（新規追加） */}
            <Card className="p-6 bg-slate-50/50 border border-dashed border-blue-300 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="text-blue-600 text-xs font-bold tracking-wider uppercase">エンタープライズ</div>
                <h3 className="text-xl font-bold text-slate-800">大規模運営・複数ブランド</h3>
                
                <div className="py-4">
                  <span className="text-3xl font-black text-slate-800">
                    要相談
                  </span>
                  <span className="text-xs text-slate-400">（お見積もり）</span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  複数ブランドの運営、受講生無制限、カスタム開発、専用インフラ構築、他システムからの完全移行支援。
                </p>

                <div className="pt-4 border-t border-slate-200 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="font-bold">受講生数：無制限（要相談）</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>動画ホスティング：個別拡張</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>LP作成数：無制限</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="font-bold text-blue-600">AIクレジット：個別カスタマイズ</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">カスタム開発・専用API提供</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  onClick={() => {
                    toast.success("エンタープライズプランのお問い合わせありがとうございます！個別面談フォームへ移行します。", {
                      description: "専任のソリューションアーキテクトが最適な構成をご提案します。",
                      duration: 5000,
                    });
                  }}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-5 text-xs rounded-full"
                >
                  お問い合わせ・要相談
                </Button>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* 10. プラン別機能詳細比較表 (マトリクス表) */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-none px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
              DETAILED COMPARISON
            </Badge>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              プラン別 機能詳細比較表
            </h2>
            <p className="mt-4 text-slate-600">
              各プランでご利用いただける機能と制限の完全なマトリクスです。
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="p-4 text-sm font-bold text-slate-700">機能 / 仕様</th>
                    <th className="p-4 text-sm font-bold text-slate-700">ベーシック</th>
                    <th className="p-4 text-sm font-bold text-blue-600 bg-blue-50/30">スタンダード</th>
                    <th className="p-4 text-sm font-bold text-slate-700">プレミアム</th>
                    <th className="p-4 text-sm font-bold text-slate-700">エンタープライズ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-xs">
	                  <tr>
	                    <td className="p-4 font-bold text-slate-800">月額（税込）</td>
	                    <td className="p-4">¥9,800 <span className="text-[10px] text-blue-600 block">(年払い特典: +100cr)</span></td>
	                    <td className="p-4 font-bold text-blue-600 bg-blue-50/30">¥19,800 <span className="text-[10px] text-blue-600 block">(年払い特典: +100cr)</span></td>
	                    <td className="p-4">¥49,800 <span className="text-[10px] text-blue-600 block">(年払い特典: +100cr)</span></td>
	                    <td className="p-4 font-bold text-slate-800">要相談</td>
	                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">受講生数</td>
                    <td className="p-4">30 人</td>
                    <td className="p-4 font-bold text-blue-600 bg-blue-50/30">100 人</td>
                    <td className="p-4">500 人</td>
                    <td className="p-4 font-bold">要相談 (無制限)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">スタッフ人数</td>
                    <td className="p-4">1 名</td>
                    <td className="p-4 font-bold text-blue-600 bg-blue-50/30">3 名</td>
                    <td className="p-4">10 名</td>
                    <td className="p-4">無制限</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">会員サイト機能</td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4 bg-blue-50/30"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">動画ホスティング</td>
                    <td className="p-4">100 GB</td>
                    <td className="p-4 font-bold text-blue-600 bg-blue-50/30">300 GB</td>
                    <td className="p-4">1,000 GB</td>
                    <td className="p-4 font-bold">要相談 (拡張可)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">LP構築機能</td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4 bg-blue-50/30"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">LP作成数制限</td>
                    <td className="p-4">5 枚</td>
                    <td className="p-4 font-bold text-blue-600 bg-blue-50/30">15 枚</td>
                    <td className="p-4">50 枚</td>
                    <td className="p-4 font-bold">無制限</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">メール配信</td>
                    <td className="p-4">簡易配信のみ</td>
                    <td className="p-4 bg-blue-50/30"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                  </tr>
	                  <tr>
	                    <td className="p-4 font-bold text-slate-800">ライン拡張機能</td>
	                    <td className="p-4">一部制限あり</td>
	                    <td className="p-4 bg-blue-50/30"><Check className="w-4 h-4 text-blue-600" /></td>
	                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
	                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
	                  </tr>
	                  <tr>
	                    <td className="p-4 font-bold text-slate-800">LINE連携アカウント数</td>
	                    <td className="p-4">1 アカウント</td>
	                    <td className="p-4 font-bold text-blue-600 bg-blue-50/30">3 アカウント</td>
	                    <td className="p-4">20 アカウント</td>
	                    <td className="p-4 font-bold">無制限</td>
	                  </tr>
	                  <tr>
	                    <td className="p-4 font-bold text-slate-800">タスク管理機能</td>
	                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
	                    <td className="p-4 bg-blue-50/30"><Check className="w-4 h-4 text-blue-600" /></td>
	                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
	                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
	                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">月間付与AIクレジット</td>
                    <td className="p-4">300 cr</td>
                    <td className="p-4 font-bold text-blue-600 bg-blue-50/30">800 cr</td>
                    <td className="p-4">2,000 cr</td>
                    <td className="p-4 font-bold">個別相談</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">カスタムCSチャットボット</td>
                    <td className="p-4">簡易ボットのみ</td>
                    <td className="p-4 bg-blue-50/30"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">解約予兆分析AI</td>
                    <td className="p-4"><Minus className="w-4 h-4 text-slate-300" /></td>
                    <td className="p-4 bg-blue-50/30"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">専任担当者サポート</td>
                    <td className="p-4"><Minus className="w-4 h-4 text-slate-300" /></td>
                    <td className="p-4 bg-blue-50/30"><Minus className="w-4 h-4 text-slate-300" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-800">カスタム開発対応</td>
                    <td className="p-4"><Minus className="w-4 h-4 text-slate-300" /></td>
                    <td className="p-4 bg-blue-50/30"><Minus className="w-4 h-4 text-slate-300" /></td>
                    <td className="p-4"><Minus className="w-4 h-4 text-slate-300" /></td>
                    <td className="p-4"><Check className="w-4 h-4 text-blue-600" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQセクション */}
      <section id="faq" className="py-20 bg-white relative">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-50 text-blue-700 border-none px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
              FAQ
            </Badge>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">よくあるご質問</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "本当に他のツールを解約して1つにまとめられますか？",
                a: "はい、可能です。会員サイト（動画配信・ホスティング込み）、LP制作、LINE配信、メール配信、決済（Stripe）、CS対応チャットボット、アクセス解析まですべて標準搭載しているため、これらを個別に契約する必要は一切なくなります。"
              },
              {
                q: "動画コンテンツの容量上限はありますか？",
                a: "ベーシックは100GB、スタンダードは300GB、プレミアムは1,000GBの超大容量ホスティング枠が含まれています。エンタープライズプランでは必要に応じて個別で無制限に拡張することが可能です。"
              },
              {
                q: "AIクレジットが足りなくなった場合はどうすればいいですか？",
                a: "管理画面からワンクリックで、いつでもスポット購入（500クレジット/2,980円〜）が可能です。また、ヘビーユーザー向けに、月々の付与クレジットを割安で追加できる「定期クレジットパッケージ」もご用意しております。"
              },
              {
                q: "他社システムからの移行サポートはありますか？",
                a: "プレミアムプランおよびエンタープライズプランをご契約のお客様には、現在お使いのシステム（Teachable、UTAGE、Lステップなど）からのデータ移行や会員データのインポートを、弊社の技術スタッフが専任で徹底サポートいたします。"
              },
              {
                q: "解約はいつでもできますか？縛りはありますか？",
                a: "はい、月払い契約の場合はいつでも解約可能です。契約の縛りは一切ございません。ただし、解約されますとシステムに蓄積・学習された「あなた独自のAIナレッジ」や対話ログは引き継ぐことができませんのでご注意ください。"
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50/50 rounded-2xl border border-slate-100 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${openFaq === idx ? "rotate-180 text-blue-600" : ""}`} />
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100/50 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. 最終CTAセクション */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50/50 relative overflow-hidden border-t border-slate-100">
        <div className="container max-w-5xl mx-auto px-4 text-center space-y-8 relative z-10">
          <img src={ICON_URL} alt="KnowledgeForce" className="w-20 h-20 mx-auto object-contain drop-shadow-md" />
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            あなたのナレッジを、
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              自動で走り続けるビジネス資産へ。
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            今月システムに学習させたデータだけが、来年のあなたの事業を自動化し、競合との圧倒的な差を生み出します。
            30日間の無料お試しで、次世代の「自走型AIビジネス」を今すぐ体験してください。
          </p>

	          <div className="pt-4">
	            <Button 
	              onClick={handleCtaClick}
	              size="lg"
	              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-full px-10 py-7 shadow-xl shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300 active:scale-95 transition-all duration-200 group"
	            >
	              KNOWLEDGE FORCEを30日間無料で始める
	              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
	            </Button>
            
            <div className="mt-4 text-xs text-slate-400 flex items-center justify-center gap-4">
              <span>初期費用 ¥0</span>
              <span>•</span>
              <span>いつでも解約可能</span>
            </div>
          </div>
        </div>
      </section>

      {/* 13. フッター */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src={LOGO_URL} alt="KnowledgeForce" className="h-8 w-auto brightness-0 invert" />
              <p className="text-xs text-slate-500 leading-relaxed">
                教育・コンテンツビジネスの「創造・構築・提供」を一気通貫で最適化するAIシステム
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-200 mb-4">サービス</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#flywheel" className="hover:text-white transition-colors">進化ロジック</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">6つの機能</a></li>
                <li><a href="#saas-cases" className="hover:text-white transition-colors">活用事例</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-200 mb-4">料金・比較</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#credits" className="hover:text-white transition-colors">AIクレジット比較</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">料金プラン</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-200 mb-4">会社情報</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="#" className="hover:text-white transition-colors">運営会社</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-[10px] text-slate-600">
            © 2026 KnowledgeForce. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
