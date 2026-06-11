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
  AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// 透過処理された新しいアイコンとロゴのURL
const LOGO_URL = "/manus-storage/logo-02-trans-refined_96fc8d0c.png";
const ICON_URL = "/manus-storage/knowledgeforce-icon-transparent_b62b10a4.png";

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
      description: "クレジットカード登録不要で、すべての機能と300クレジットが今すぐご利用いただけます。",
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

          <div className="flex items-center gap-4">
            <Button 
              onClick={handleCtaClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 active:scale-95 transition-all duration-200 text-sm rounded-full px-6 py-2"
            >
              30日間無料で試す
            </Button>
          </div>
        </div>
      </header>

      {/* 2. ヒーローセクション (ファーストビュー) */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/50">
        {/* 背景の装飾用グラデーション光 */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl -z-10" />
        
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* 左側：ロゴとグラフィック */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center text-center lg:text-left">
              <div className="relative p-8 md:p-12 bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 max-w-md w-full">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce">
                  NEW RELEASE
                </div>
                <img 
                  src={ICON_URL} 
                  alt="KnowledgeForce Icon" 
                  className="w-40 h-40 md:w-48 md:h-48 mx-auto object-contain drop-shadow-xl animate-pulse"
                  style={{ animationDuration: '3s' }}
                />
                <div className="mt-8 text-center">
                  <span className="text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
                    AI-Native Platform
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-slate-800">KnowledgeForce</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    教育・コンテンツビジネスの未来を創るAIシステム
                  </p>
                </div>
              </div>
            </div>

            {/* 右側：キャッチコピーと導入文 */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none px-4 py-1.5 text-sm font-semibold mb-6 rounded-full inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
                教育・コンテンツ販売事業の次世代オールインワン
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                創造、構築、提供を
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  一気通貫で最適に。
                </span>
              </h1>
              
              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                KnowledgeForce（ナレッジフォース）は、教材の創造から、会員サイト・LPの構築、そしてLINEや決済、AIによる個別学習サポートまですべてを1つに統合した、事業者と受講生のための次世代AIインフラです。
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleCtaClick}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full px-8 py-6 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 active:scale-95 transition-all duration-200 group"
                >
                  ナレッジフォースを30日間無料で試してみる
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="mt-4 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-blue-500" /> クレジットカード登録不要</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-blue-500" /> 30秒で即座に開始可能</span>
              </div>

              {/* クイック実績スタッツ */}
              <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">9つ</div>
                  <div className="text-xs text-slate-500 mt-1">のツールを1つに統合</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">1/2</div>
                  <div className="text-xs text-slate-500 mt-1">の労力で会員サイト構築</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">80%</div>
                  <div className="text-xs text-slate-500 mt-1">の運営工数を自動削減</div>
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
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
                  {/* 中央のコア */}
                  <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg border border-blue-100 flex flex-col items-center justify-center z-10">
                    <img src={ICON_URL} alt="KF" className="w-10 h-10 md:w-14 md:h-10 object-contain" />
                    <span className="text-[10px] md:text-xs font-bold text-blue-600 mt-1">学習AI頭脳</span>
                  </div>

                  {/* 循環する軌道とステップ */}
                  <div className="absolute inset-0 border-4 border-dashed border-blue-200 rounded-full animate-spin" style={{ animationDuration: '60s' }} />

                  {/* ステップ1: 知見のインプット (上) */}
                  <div className="absolute -top-4 bg-white px-4 py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-2 z-10 hover:scale-105 transition-transform">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span className="text-xs font-bold text-slate-700">教材・知見の学習</span>
                  </div>

                  {/* ステップ2: エンドユーザー利用 (右) */}
                  <div className="absolute -right-4 bg-white px-4 py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-2 z-10 hover:scale-105 transition-transform">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span className="text-xs font-bold text-slate-700">受講生が質問・学習</span>
                  </div>

                  {/* ステップ3: ログの蓄積 (下) */}
                  <div className="absolute -bottom-4 bg-white px-4 py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-2 z-10 hover:scale-105 transition-transform">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span className="text-xs font-bold text-slate-700">行動・対話ログの蓄積</span>
                  </div>

                  {/* ステップ4: AIの進化と改善提案 (左) */}
                  <div className="absolute -left-4 bg-white px-4 py-2 rounded-xl shadow-md border border-slate-100 flex items-center gap-2 z-10 hover:scale-105 transition-transform">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <span className="text-xs font-bold text-slate-700">自動改善＆売上向上</span>
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
                動画を構築するだけで、
                <span className="block mt-1 text-blue-600">AIが台本・スライド・CSを自動生成</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                会員サイトをつくるのも、AIによる強力なサポートが入るため、<strong>これまでの1/2の労力</strong>で完了します。
                あなたが持っているノウハウ動画をアップロード・構築さえしてくれれば、その後の展開はすべてAIが引き受けます。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800">台本・スライドの1/2化</h4>
                  <p className="text-xs text-slate-500">
                    テーマを伝えるだけで、AIが講義台本やスライド構成を自動作成。あなたは喋って録画するだけです。
                  </p>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-800">CSボットが即座に自動生成</h4>
                  <p className="text-xs text-slate-500">
                    構築された会員サイトの動画やテキストデータをAIが自動学習。あなた専用のCSチャットボットがその場で誕生します。
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
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
              {[
                { label: "AI学習会員サイト", icon: Layers },
                { label: "ノーコードLP制作", icon: FileText },
                { label: "LINE自動連携", icon: Smartphone },
                { label: "Stripe決済連携", icon: CreditCard },
                { label: "カスタムCSボット", icon: MessageSquare },
                { label: "AI事業相談", icon: Lightbulb },
              ].map((tab, idx) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveFeatureTab(idx)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-full text-sm font-bold transition-all duration-200 ${
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
                      <h3 className="text-2xl font-bold text-slate-900">AI学習会員サイト</h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      受講生の学習行動ログをAIがリアルタイムで解析。躓いているポイントや離脱の予兆を検知し、パーソナライズされた最適な復習タイミングをレコメンドします。
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>他社との違い：</strong> 既存のTeachable等はただ動画を並べるだけ。KnowledgeForceは受講生の躓きを検知して能動的にサポートします。</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>どんな人におすすめ：</strong> 受講生の挫折率を下げ、講座の完走率・満足度を極限まで高めたい運営者。</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800">
                      <strong>【図解】パーソナライズサポート：</strong>
                      受講生が「動画A」を3回巻き戻して視聴 ➔ AIが「難所」と判定 ➔ LINEで自動的に「動画Aの補足テキスト」を個別送信
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                    <h4 className="font-bold text-slate-800 text-sm">学習行動分析ダッシュボード（イメージ）</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                        <span className="text-xs text-slate-600 font-medium">平均完走率</span>
                        <span className="text-sm font-bold text-emerald-600">92% (+35%)</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                        <span className="text-xs text-slate-600 font-medium">離脱危険ユーザー</span>
                        <span className="text-xs font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full">3名（自動フォロー済）</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-100">
                        <div className="text-xs text-slate-500 mb-1">直近のAIレコメンド</div>
                        <p className="text-[11px] text-slate-600 font-medium">「受講生 田中様に、セクション2の補足クイズを送信しました」</p>
                      </div>
                    </div>
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
                      <h3 className="text-2xl font-bold text-slate-900">LINE自動連携</h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      単なる配信ツールではなく、会員サイトの学習ログと完全連動。LPの離脱率や配信メッセージの反応をAIが分析し、リアルタイムで改善アラートや最適な配信文を提示します。
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>他社との違い：</strong> Lステップ等は数字を見るのは人間。KnowledgeForceはAIが数値を監視し、改善文まで作ってあなたを呼び出します。</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>どんな人におすすめ：</strong> 配信設定やデータ分析が面倒で、LINE運用を自動最適化したい方。</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800">
                      <strong>【図解】リアルタイム改善：</strong>
                      配信メッセージのクリック率が低下 ➔ AIがLINEで運営者に通知 ➔ 「クリック率改善のための新しい配信文案（3パターン）」をその場で提案
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                    <h4 className="font-bold text-slate-800 text-sm">運営者向けLINEアラート（イメージ）</h4>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-3 shadow-sm">
                      <div className="flex items-center gap-2">
                        <img src={ICON_URL} alt="KF" className="w-6 h-6 object-contain" />
                        <span className="text-xs font-bold text-blue-600">KnowledgeForce AI</span>
                      </div>
                      <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg leading-relaxed">
                        「【改善アラート】昨日配信したメッセージの開封率が目標値を下回りました。件名に『特典』を含めることで、開封率が推定15%改善します。新しい配信文を作成しますか？」
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeFeatureTab === 3 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                        <CreditCard className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Stripe決済連携</h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      Stripeを基盤とした強固な決済。サブスクリプション、分割払い、ワンタイム決済に対応。さらに受講生の学習行動と連動し、解約リスクの高いユーザーを自動予測します。
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>他社との違い：</strong> 通常の決済は入金管理のみ。KnowledgeForceは「ログイン頻度の低下 ➔ 解約リスク上昇」を予測し、自動でフォローを入れます。</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>どんな人におすすめ：</strong> サブスク（月額課金）モデルの継続率・LTVを最大化させたいスクール運営者。</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800">
                      <strong>【図解】解約防止ロジック：</strong>
                      受講生のログインが2週間途絶える ➔ AIが「解約リスク：高」と判定 ➔ 自動的に「最近のアップデート講義」の個別案内を送信して呼び戻し
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                    <h4 className="font-bold text-slate-800 text-sm">解約予兆分析（イメージ）</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                        <span className="text-xs text-slate-600 font-medium">田中 太郎 様</span>
                        <span className="text-xs font-bold bg-red-50 text-red-600 px-2 py-0.5 rounded-full">解約リスク：85%</span>
                      </div>
                      <div className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                        <span className="text-xs text-slate-600 font-medium">鈴木 一郎 様</span>
                        <span className="text-xs font-bold bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full">解約リスク：40%</span>
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
                      <h3 className="text-2xl font-bold text-slate-900">カスタムCSチャットボット</h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      会員サイトにアップロードされたあなたの動画教材やテキストデータだけを正しく学習。一般的なAIとは異なり、あなたの提供するメソッドに100%準拠した回答を24時間自動で行います。
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>他社との違い：</strong> 一般的なChatGPTは嘘を答える（ハルシネーション）。KnowledgeForceは「あなたの教材内」からしか回答しないため、極めて正確です。</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>どんな人におすすめ：</strong> 日々の受講生からの質問対応・カスタマーサポートに追われ、自分の時間が奪われている方。</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800">
                      <strong>【図解】カスタムCSボット：</strong>
                      受講生が「第3章の課題の提出方法は？」と質問 ➔ AIが「あなたが作成した第3章の解説PDF」から正確な手順を1秒で回答
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                    <h4 className="font-bold text-slate-800 text-sm">受講生向けCSチャット画面（イメージ）</h4>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-3 shadow-sm text-xs">
                      <div className="text-slate-500 text-[10px] text-center">ーー あなたの教材データから回答中 ーー</div>
                      <div className="text-right">
                        <span className="bg-blue-50 text-blue-800 p-2 rounded-lg inline-block">動画講義の15分目の数式について教えて</span>
                      </div>
                      <div className="text-left">
                        <span className="bg-slate-100 text-slate-800 p-2 rounded-lg inline-block">
                          講義動画「第2講」の15分12秒で解説している数式は、〇〇の法則に基づいています。詳細な解説テキストは会員サイトの資料タブにもございます。
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeatureTab === 5 && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                        <Lightbulb className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">AI事業相談</h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      24時間いつでも相談できる、あなた専属の「AI経営コンサルタント」。
                      事業計画の策定から、新講座の企画、マーケティング施策、配信メッセージのブラッシュアップまで、あらゆる相談に即座に応じます。
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>他社との違い：</strong> 汎用的なAIチャットとは異なり、KnowledgeForceに蓄積された「あなたの売上データや受講生ログ」を前提にした、極めて具体的で現実的なアドバイスを行います。</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700"><strong>どんな人におすすめ：</strong> 1人で事業を運営しており、壁打ち相手やマーケティングのアドバイザーが欲しい方。</span>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-xs text-blue-800">
                      <strong>【図解】AI事業相談：</strong>
                      「来月の売上を1.5倍にするための施策は？」 ➔ AIが「現在の会員データ・離脱率・過去の売れ筋LP」を分析し、最も成約率の高いプロモーション案を自動作成
                    </div>
                  </div>
                  <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                    <h4 className="font-bold text-slate-800 text-sm">AI事業相談チャット（イメージ）</h4>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-3 shadow-sm text-xs">
                      <div className="text-left">
                        <span className="bg-blue-50 text-blue-800 p-2 rounded-lg inline-block font-bold">
                          「現在の受講生データに基づき、次回のバックエンド講座の最適な価格設定と訴求ポイントを教えてください。」
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full" />
                      <div className="h-2 w-5/6 bg-slate-100 rounded-full" />
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

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="text-left p-4 bg-slate-50 rounded-2xl">
                    <div className="text-[10px] text-slate-400 font-bold">月間の削減コスト</div>
                    <div className="text-lg font-bold text-slate-700 mt-1">
                      {calculatedSavings.monthly.toLocaleString()} 円
                    </div>
                  </div>
                  <div className="text-left p-4 bg-slate-50 rounded-2xl">
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
              年払い契約をお選びいただくと、すべてのプランが<strong>20%オフ（実質2ヶ月分無料）</strong>でご利用いただけます。
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
                  20% OFF
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
                    ¥{isAnnual ? "7,840" : "9,800"}
                  </span>
                  <span className="text-xs text-slate-400"> / 月 (税込)</span>
                  {isAnnual && <div className="text-[10px] text-emerald-600 font-bold mt-1">※年一括 ¥94,080 払い</div>}
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
                    ¥{isAnnual ? "15,840" : "19,800"}
                  </span>
                  <span className="text-xs text-slate-400"> / 月 (税込)</span>
                  {isAnnual && <div className="text-[10px] text-emerald-600 font-bold mt-1">※年一括 ¥190,080 払い</div>}
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
                    ¥{isAnnual ? "39,840" : "49,800"}
                  </span>
                  <span className="text-xs text-slate-400"> / 月 (税込)</span>
                  {isAnnual && <div className="text-[10px] text-emerald-600 font-bold mt-1">※年一括 ¥478,080 払い</div>}
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
                    <td className="p-4">¥9,800 <span className="text-[10px] text-slate-400 block">(年払い: ¥7,840)</span></td>
                    <td className="p-4 font-bold text-blue-600 bg-blue-50/30">¥19,800 <span className="text-[10px] text-slate-400 block">(年払い: ¥15,840)</span></td>
                    <td className="p-4">¥49,800 <span className="text-[10px] text-slate-400 block">(年払い: ¥39,840)</span></td>
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
                    <td className="p-4 font-bold text-slate-800">LINE自動連携</td>
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
                    <td className="p-4 font-bold text-slate-800">Stripe決済連携</td>
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
              ナレッジフォースを30日間無料で試してみる
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="mt-4 text-xs text-slate-400 flex items-center justify-center gap-4">
              <span>初期費用 ¥0</span>
              <span>•</span>
              <span>いつでも解約可能</span>
              <span>•</span>
              <span>クレジットカード登録不要</span>
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
