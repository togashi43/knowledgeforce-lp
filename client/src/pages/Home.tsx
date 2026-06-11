import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { 
  Sparkles, CheckCircle2, Shield, ArrowRight, Zap, RefreshCw, Users, 
  Layers, MessageSquare, CreditCard, HelpCircle, AlertCircle, BarChart3,
  Check, Play, ArrowUpRight, TrendingUp, Cpu, Award, Code, BookOpen
} from "lucide-react";

export default function Home() {
  // 状態管理
  const [isYearly, setIsYearly] = useState(true);
  const [studentCount, setStudentCount] = useState(100);
  const [currentToolCost, setCurrentToolCost] = useState(50000);

  // 透過処理されたロゴのURL
  const logoUrl = "/manus-storage/knowledgeforce-icon-transparent_24b2ab9d.png";

  // コストシミュレーションの計算
  const calculatedSavings = useMemo(() => {
    // 運営者本人＋スタッフの人件費（受講生数に応じて変動）
    const laborCost = studentCount * 1500; 
    const currentTotalMonthly = currentToolCost + laborCost;
    
    // KNOWLEDGE FORCE（スタンダードプラン ¥19,800を想定）
    const kfCost = 19800;
    // KNOWLEDGE FORCE導入による業務効率化で人件費が80%削減されると仮定
    const kfLaborCost = laborCost * 0.2;
    const kfTotalMonthly = kfCost + kfLaborCost;
    
    const monthlySavings = Math.max(0, currentTotalMonthly - kfTotalMonthly);
    const yearlySavings = monthlySavings * 12;
    
    return {
      currentMonthly: currentTotalMonthly,
      kfMonthly: kfTotalMonthly,
      monthly: monthlySavings,
      yearly: yearlySavings
    };
  }, [studentCount, currentToolCost]);

  // CTAクリック時の共通ハンドラ
  const handleCtaClick = () => {
    toast.success("ナレッジフォースを30日間無料で試してみる", {
      description: "アカウント作成画面へ移動します（デモ動作：現在開発環境のため、まもなく登録フォームがオープンします）",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-50">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src={logoUrl} 
              alt="KnowledgeForce Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-blue-600 font-sans">KNOWLEDGE FORCE</span>
              <span className="text-[10px] text-slate-400 font-medium tracking-widest -mt-1">ナレッジフォース</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">機能</a>
            <a href="#shift" className="hover:text-blue-600 transition-colors">3つの転換</a>
            <a href="#credits" className="hover:text-blue-600 transition-colors">AIクレジット</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">料金プラン</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">よくある質問</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              onClick={handleCtaClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 shadow-md shadow-blue-200 hover:shadow-lg transition-all text-xs md:text-sm"
            >
              30日間無料でお試し
            </Button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-32 bg-gradient-to-b from-blue-50/60 via-white to-white">
        {/* 背景の装飾的な薄いブルーの円 */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-blue-50/80 rounded-full blur-3xl -z-10" />

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* 左側：ロゴとブランドビジュアル */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl border border-blue-100/80 shadow-sm relative">
              <div className="absolute top-4 left-4">
                <Badge variant="outline" className="border-blue-200 text-blue-600 bg-blue-50/50">AI-SaaS</Badge>
              </div>
              <img 
                src={logoUrl} 
                alt="KnowledgeForce Symbol" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain animate-pulse [animation-duration:4s]"
              />
              <div className="text-center mt-4">
                <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase">KnowledgeForce</p>
                <p className="text-xs text-slate-400 mt-1">教育・コンテンツビジネスの未来を創るAIシステム</p>
              </div>
            </div>

            {/* 右側：キャッチコピーと導入コピー */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                教育・コンテンツ販売事業の次世代オールインワン
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                創造、構築、提供を<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                  一気通貫で最適に。
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                KNOWLEDGE FORCE（ナレッジフォース）は、教材の創造から、会員サイト・LPの構築、そしてLINEや決済、AIによる個別学習サポートまでをすべて1つに統合した、事業者と受講生のためのAIインフラです。
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleCtaClick}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-8 py-6 text-base shadow-lg shadow-blue-200 hover:shadow-xl transition-all group"
                >
                  ナレッジフォースを30日間無料で試してみる
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 max-w-md mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-blue-600">9つ</p>
                  <p className="text-xs text-slate-500 font-medium">のツールを1つに統合</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-blue-600">80%</p>
                  <p className="text-xs text-slate-500 font-medium">運営工数を自動削減</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-blue-600">24/7</p>
                  <p className="text-xs text-slate-500 font-medium">専属AIによる個別CS</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE GAP / PROBLEMS */}
      <section className="py-20 bg-white border-t border-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">教育・コンテンツビジネスの構造的課題</h2>
            <p className="text-3xl font-bold text-slate-900 tracking-tight">ツールを乱立させ、時間とデータをドブに捨てていませんか？</p>
            <p className="text-slate-500">多くの運営者が「ツールの繋ぎ合わせ」と「手作業の運営」に追われ、本来やるべき事業成長に集中できていません。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-red-100 bg-red-50/10 hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mb-2">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-slate-900">課題① ツール乱立による「分断」と高額費用</CardTitle>
                <CardDescription>
                  会員サイト、LP、動画、LINE、決済、メールなど平均9個のツールを併用。月額5万〜15万円のコストがかかる上、データは完全に分断されています。
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-500 space-y-2">
                <div className="flex justify-between border-b border-slate-100 py-1">
                  <span>会員サイト (UTAGE/Teachable等)</span>
                  <span className="font-semibold text-slate-700">¥10,000〜¥30,000/月</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 py-1">
                  <span>LINE構築 (Lステップ等)</span>
                  <span className="font-semibold text-slate-700">¥10,000〜¥40,000/月</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 py-1">
                  <span>動画配信 (Vimeo等)</span>
                  <span className="font-semibold text-slate-700">¥7,000〜¥15,000/月</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-100 bg-amber-50/10 hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mb-2">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-slate-900">課題② 見えない「隠れコスト」の肥大化</CardTitle>
                <CardDescription>
                  月々のツール代は氷山の一角。運営者自身の運用工数、スタッフ人件費、仕様変更時の外注費など、年間で180万〜450万円ものコストが消えています。
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-500 space-y-2">
                <div className="flex justify-between border-b border-slate-100 py-1">
                  <span>運営者の運用工数</span>
                  <span className="font-semibold text-slate-700">¥30万〜¥80万/月 相当</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 py-1">
                  <span>スタッフ人件費 (1名)</span>
                  <span className="font-semibold text-slate-700">¥60万〜¥150万/月 相当</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 py-1">
                  <span>仕様変更・連携コスト</span>
                  <span className="font-semibold text-slate-700">¥10万〜¥30万/回</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-blue-50/50 border border-blue-100 max-w-4xl mx-auto text-center">
            <p className="text-slate-700 font-semibold text-base">
              「これまでのオールインワンツールは、単なる配管の統合でした。中身のAI事業自動化までを統合したシステムは、KNOWLEDGE FORCEが世界で初めてです。」
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE THREE SHIFTS */}
      <section id="shift" className="py-20 bg-gradient-to-b from-white to-blue-50/30 border-t border-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">KNOWLEDGE FORCEが起こす「3つの転換」</h2>
            <p className="text-3xl font-bold text-slate-900 tracking-tight">ただのツールではない、ビジネスモデル自体の次世代化</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* 転換1 */}
            <div className="bg-white p-8 rounded-2xl border border-blue-100/50 shadow-sm space-y-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900">コスト構造の転換</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 text-slate-500 text-xs">
                  <p className="font-semibold line-through">Before</p>
                  <p className="text-sm font-bold text-slate-600">月額 10万円以上</p>
                  <p>バラバラなツール代＋多額の人件費</p>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/50 text-blue-700 text-xs border border-blue-100">
                  <p className="font-semibold">After</p>
                  <p className="text-sm font-bold text-blue-600">月額 ¥9,800 〜</p>
                  <p>すべてのインフラとAIを1つのシンプルな料金へ</p>
                </div>
              </div>
            </div>

            {/* 転換2 */}
            <div className="bg-white p-8 rounded-2xl border border-blue-100/50 shadow-sm space-y-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900">業務構造の転換</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 text-slate-500 text-xs">
                  <p className="font-semibold line-through">Before</p>
                  <p className="text-sm font-bold text-slate-600">人が動かす事業</p>
                  <p>配信設定、問い合わせ、データ突合に忙殺</p>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/50 text-blue-700 text-xs border border-blue-100">
                  <p className="font-semibold">After</p>
                  <p className="text-sm font-bold text-blue-600">AIが動かし、人は意思決定する</p>
                  <p>AIがワークフローを自走。運営者は企画と体験向上に集中</p>
                </div>
              </div>
            </div>

            {/* 転換3 */}
            <div className="bg-white p-8 rounded-2xl border border-blue-100/50 shadow-sm space-y-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900">資産価値の転換</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 text-slate-500 text-xs">
                  <p className="font-semibold line-through">Before</p>
                  <p className="text-sm font-bold text-slate-600">頭の中だけのノウハウ</p>
                  <p>運営者が倒れたら事業もストップする属人性</p>
                </div>
                <div className="p-3 rounded-xl bg-blue-50/50 text-blue-700 text-xs border border-blue-100">
                  <p className="font-semibold">After</p>
                  <p className="text-sm font-bold text-blue-600">「学習済みAI」という売却可能な資産へ</p>
                  <p>あなたのメソッドを学習したAIが自走する永続的な仕組み</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SIX CORE FEATURES */}
      <section id="features" className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">6つの主要機能</h2>
            <p className="text-3xl font-bold text-slate-900 tracking-tight">KNOWLEDGE FORCEに集約された、事業の「手足」</p>
            <p className="text-slate-500">もう個別の連携設定は不要。すべての機能が「AI」と「データベース」を介してシームレスに連動します。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* 機能1 */}
            <Card className="border-blue-100/60 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <Layers className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">① AI学習会員サイト</CardTitle>
                <CardDescription>
                  教材、進捗、受講生の行動ログを一元管理。
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-500">
                受講生の進捗状況に合わせてAIが最適な復習タイミングをレコメンド。個別の離脱リスクも自動検知。
              </CardContent>
            </Card>

            {/* 機能2 */}
            <Card className="border-blue-100/60 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">② ノーコードLP制作</CardTitle>
                <CardDescription>
                  AIが瞬時に売れるLPの原稿とデザインを生成。
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-500">
                あなたの過去の成約データや競合分析に基づき、売れるLP構成を自動提案。ブロックを配置するだけで公開完了。
              </CardContent>
            </Card>

            {/* 機能3 */}
            <Card className="border-blue-100/60 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">③ LINE連携 & 自動化</CardTitle>
                <CardDescription>
                  「数字を見に行く」から「数字に呼ばれる」運用へ。
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-500">
                LPの離脱率やLINEのブロック率上昇をAIが検知してLINEで通知。その場で改善メッセージ案を自動生成。
              </CardContent>
            </Card>

            {/* 機能4 */}
            <Card className="border-blue-100/60 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <CreditCard className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">④ 決済（Stripe基盤）</CardTitle>
                <CardDescription>
                  解約予兆まで含めて決済データを資産化。
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-500">
                サブスク、分割、ワンタイムに対応。決済データから解約リスクの高いユーザーを自動抽出し、事前にフォローを促します。
              </CardContent>
            </Card>

            {/* 機能5 */}
            <Card className="border-blue-100/60 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <Cpu className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">⑤ AI事業相談（2モード）</CardTitle>
                <CardDescription>
                  「作る」構築モード ＆「考える」相談モード。
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-500">
                教材構成やセミナー台本の自動生成から、広告CVR低下時の原因分析、導線のボトルネック解析まで実データを元に並走。
              </CardContent>
            </Card>

            {/* 機能6 */}
            <Card className="border-blue-100/60 shadow-sm hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <Users className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">⑥ カスタムCSチャットボット</CardTitle>
                <CardDescription>
                  あなたの教材データだけを正として答えるAI。
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-500">
                受講生からの質問に、一般論ではなく「あなたの提供メソッド」のみをベースにして自動回答。CS対応時間を9割削減。
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* 6. AI CREDITS COMPARISON (NEW SECTION) */}
      <section id="credits" className="py-20 bg-gradient-to-b from-white to-blue-50/20 border-t border-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">AIクレジット比較・消費目安</h2>
            <p className="text-3xl font-bold text-slate-900 tracking-tight">クレジットで何がどれだけ作れるのか？</p>
            <p className="text-slate-500">KNOWLEDGE FORCEでは、すべてのAI機能を共通の「クレジット」で利用可能。1クレジット＝約¥5換算で、外注費を劇的に削減できます。</p>
          </div>

          {/* クレジット消費の目安表 */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-blue-100 shadow-sm overflow-hidden mb-12">
            <div className="p-6 md:p-8 bg-blue-50/50 border-b border-blue-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">AIクレジットの「使いどころ」と「減り方」</h3>
                <p className="text-sm text-slate-500 mt-1">従来の外注コストや手作業時間と比較して、圧倒的な経済合理性を発揮します。</p>
              </div>
              <Badge className="bg-blue-600 text-white px-3 py-1 text-xs">※1クレジット＝約¥5換算</Badge>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 text-xs font-semibold border-b border-blue-100">
                    <th className="p-4 pl-6 md:pl-8">タスク内容</th>
                    <th className="p-4">従来の外注・工数コスト</th>
                    <th className="p-4 text-blue-600">消費クレジット</th>
                    <th className="p-4 pr-6 md:pr-8 text-blue-600">実質費用（目安）</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-600 divide-y divide-slate-100">
                  <tr className="hover:bg-blue-50/20 transition-colors">
                    <td className="p-4 pl-6 md:pl-8 font-medium text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-blue-500" /> 教材・カリキュラム構成 (1式)
                    </td>
                    <td className="p-4">¥50,000 〜 ¥150,000</td>
                    <td className="p-4 font-semibold text-slate-900">5 cr</td>
                    <td className="p-4 pr-6 md:pr-8 font-bold text-blue-600">約 ¥25</td>
                  </tr>
                  <tr className="hover:bg-blue-50/20 transition-colors">
                    <td className="p-4 pl-6 md:pl-8 font-medium text-slate-900 flex items-center gap-2">
                      <Code className="w-4 h-4 text-blue-500" /> LP原稿生成 (フル構成1本)
                    </td>
                    <td className="p-4">¥100,000 〜 ¥300,000</td>
                    <td className="p-4 font-semibold text-slate-900">10 cr</td>
                    <td className="p-4 pr-6 md:pr-8 font-bold text-blue-600">約 ¥50</td>
                  </tr>
                  <tr className="hover:bg-blue-50/20 transition-colors">
                    <td className="p-4 pl-6 md:pl-8 font-medium text-slate-900 flex items-center gap-2">
                      <Play className="w-4 h-4 text-blue-500" /> セミナー・動画台本 (1本)
                    </td>
                    <td className="p-4">¥150,000 〜 ¥300,000</td>
                    <td className="p-4 font-semibold text-slate-900">30 cr</td>
                    <td className="p-4 pr-6 md:pr-8 font-bold text-blue-600">約 ¥150</td>
                  </tr>
                  <tr className="hover:bg-blue-50/20 transition-colors">
                    <td className="p-4 pl-6 md:pl-8 font-medium text-slate-900 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-blue-500" /> LINE配信文・訴求案 (1本)
                    </td>
                    <td className="p-4">¥5,000 〜 ¥10,000</td>
                    <td className="p-4 font-semibold text-slate-900">1 cr</td>
                    <td className="p-4 pr-6 md:pr-8 font-bold text-blue-600">約 ¥5</td>
                  </tr>
                  <tr className="hover:bg-blue-50/20 transition-colors">
                    <td className="p-4 pl-6 md:pl-8 font-medium text-slate-900 flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" /> CSチャットボット回答 (1,000件)
                    </td>
                    <td className="p-4">¥150,000相当（人件費）</td>
                    <td className="p-4 font-semibold text-slate-900">50 cr</td>
                    <td className="p-4 pr-6 md:pr-8 font-bold text-blue-600">約 ¥250</td>
                  </tr>
                  <tr className="hover:bg-blue-50/20 transition-colors">
                    <td className="p-4 pl-6 md:pl-8 font-medium text-slate-900 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-blue-500" /> AI事業壁打ち・ボトルネック解析
                    </td>
                    <td className="p-4">¥200,000相当（コンサル費）</td>
                    <td className="p-4 font-semibold text-slate-900">300 cr / 月100時間</td>
                    <td className="p-4 pr-6 md:pr-8 font-bold text-blue-600">約 ¥1,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 各プランの月間できること目安 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h4 className="font-bold text-slate-900 text-base">ベーシック (300cr/月) でできること</h4>
              <p className="text-xs text-slate-400 mt-1">個人コンテンツホルダー・スモールスタート向け</p>
              <ul className="text-sm text-slate-600 space-y-2 mt-4 border-t border-slate-100 pt-4">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>AI壁打ち 1日50往復 (150cr)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>LINE配信文 月60本 (60cr)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>LP原稿作成 月4本 (40cr)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>教材カリキュラム構成 月10式 (50cr)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-blue-500 shadow-md relative">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-blue-500 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                RECOMMENDED
              </div>
              <h4 className="font-bold text-slate-900 text-base">スタンダード (1,000cr/月) でできること</h4>
              <p className="text-xs text-blue-500 font-semibold mt-1">本格的に事業を伸ばすメイン運営者向け</p>
              <ul className="text-sm text-slate-600 space-y-2 mt-4 border-t border-slate-100 pt-4">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>AI壁打ち 1日100往復 (300cr)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>LINE配信文 月150本 (150cr)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>LP原稿作成 月20本 (200cr)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>セミナー・動画台本 月5本 (150cr)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h4 className="font-bold text-slate-900 text-base">プレミアム (3,000cr/月) でできること</h4>
              <p className="text-xs text-slate-400 mt-1">大規模スクール・自動化を極める事業者向け</p>
              <ul className="text-sm text-slate-600 space-y-2 mt-4 border-t border-slate-100 pt-4">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>CS自動回答 月10,000件 (500cr)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>AI壁打ち 1日150往復 (450cr)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>LP原稿作成 月50本 (500cr)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <span>セミナー台本・教材構成 月35式 (550cr)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COST SIMULATOR */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50/50 to-white rounded-3xl border border-blue-100 p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <Badge variant="outline" className="border-blue-200 text-blue-600 bg-white">コストシミュレーター</Badge>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">KNOWLEDGE FORCEで<br />削減できる本当のコスト</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  受講生が増えるほど、ツールの連携やCS対応にかかる「隠れた人件費・工数」は膨れ上がります。KNOWLEDGE FORCEはAIの自動化により、それらをほぼゼロに抑えます。
                </p>

                <div className="space-y-6 pt-4">
                  {/* スライダー1：受講生数 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-slate-700">現在の受講生・会員数</span>
                      <span className="font-bold text-blue-600">{studentCount} 名</span>
                    </div>
                    <input 
                      type="range" 
                      min="10" 
                      max="1000" 
                      value={studentCount} 
                      onChange={(e) => setStudentCount(Number(e.target.value))}
                      className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  {/* スライダー2：現在のツール代 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-slate-700">現在の月額ツール合計費用</span>
                      <span className="font-bold text-blue-600">¥{currentToolCost.toLocaleString()} / 月</span>
                    </div>
                    <input 
                      type="range" 
                      min="10000" 
                      max="200000" 
                      step="5000"
                      value={currentToolCost} 
                      onChange={(e) => setCurrentToolCost(Number(e.target.value))}
                      className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-2xl border border-blue-100/60 shadow-sm text-center space-y-6">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-500">年間削減できる見込みコスト</p>
                  <p className="text-4xl md:text-5xl font-extrabold text-blue-600 tracking-tight">
                    ¥{calculatedSavings.yearly.toLocaleString()}
                  </p>
                  <p className="text-xs text-slate-400">※運営工数削減（¥{Math.round(studentCount * 1500 * 0.8).toLocaleString()}/月相当）を含む経済効果</p>
                </div>

                <div className="divide-y divide-slate-100 text-sm">
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500">現在の総コスト（ツール＋工数）</span>
                    <span className="font-semibold text-slate-700">¥{Math.round(calculatedSavings.currentMonthly).toLocaleString()} / 月</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-slate-500">KNOWLEDGE FORCE 導入後</span>
                    <span className="font-bold text-blue-600">¥{Math.round(calculatedSavings.kfMonthly).toLocaleString()} / 月</span>
                  </div>
                  <div className="flex justify-between py-3 text-base font-bold">
                    <span className="text-blue-600">毎月の純削減コスト</span>
                    <span className="text-blue-600">¥{Math.round(calculatedSavings.monthly).toLocaleString()} / 月</span>
                  </div>
                </div>

                <Button 
                  onClick={handleCtaClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  ナレッジフォースを30日間無料で試してみる
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING PLANS */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-blue-50/20 to-white border-t border-slate-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">シンプルな料金プラン</h2>
            <p className="text-3xl font-bold text-slate-900 tracking-tight">事業規模に合わせて、必要な分だけ</p>
            
            {/* 年払いトグル */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <span className={`text-sm ${!isYearly ? "text-slate-900 font-bold" : "text-slate-400"}`}>月払い</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-12 h-6 rounded-full bg-blue-100 p-1 flex items-center transition-all"
              >
                <div className={`w-4 h-4 rounded-full bg-blue-600 transition-all transform ${isYearly ? "translate-x-6" : "translate-x-0"}`} />
              </button>
              <span className={`text-sm ${isYearly ? "text-blue-600 font-bold" : "text-slate-400"} flex items-center gap-1.5`}>
                年払い契約 <Badge className="bg-blue-600 text-white text-[10px] py-0 px-1.5 font-bold">20% OFF</Badge>
              </span>
            </div>
          </div>

          {/* 基本プランカード */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            
            {/* ベーシック */}
            <Card className="border-blue-100 bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-slate-900">ベーシック</CardTitle>
                <CardDescription>まずはスモールスタートしたい個人向け</CardDescription>
                <div className="pt-4">
                  <span className="text-3xl font-extrabold text-slate-900">
                    ¥{isYearly ? "7,840" : "9,800"}
                  </span>
                  <span className="text-sm text-slate-500"> / 月</span>
                  {isYearly && <p className="text-xs text-blue-600 font-semibold mt-1">年払い契約（一括請求）</p>}
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <div className="p-3 rounded-xl bg-blue-50/50 text-blue-700 text-xs font-semibold">
                  毎月 300クレジット 付与
                </div>
                <ul className="text-sm text-slate-600 space-y-2.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span>会員サイト容量: 100GB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span>LP制作: 制限なし</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span>LINE連携: 制限なし</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span>Stripe決済連携: 制限なし</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button 
                  onClick={handleCtaClick}
                  variant="outline" 
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  30日間無料で試してみる
                </Button>
              </div>
            </Card>

            {/* スタンダード */}
            <Card className="border-2 border-blue-500 bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative">
              <div className="absolute top-0 right-6 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold tracking-wider uppercase px-4 py-1 rounded-full">
                人気No.1
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-slate-900">スタンダード</CardTitle>
                <CardDescription>本格的に売上を最大化させたいメイン運営者向け</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-extrabold text-blue-600">
                    ¥{isYearly ? "15,840" : "19,800"}
                  </span>
                  <span className="text-sm text-slate-500"> / 月</span>
                  {isYearly && <p className="text-xs text-blue-600 font-semibold mt-1">年払い契約（一括請求）</p>}
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <div className="p-3 rounded-xl bg-blue-500 text-white text-xs font-semibold shadow-sm">
                  毎月 1,000クレジット 付与
                </div>
                <ul className="text-sm text-slate-600 space-y-2.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span className="font-semibold text-slate-800">会員サイト容量: 300GB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span>LP制作: 制限なし</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span>LINE連携: 制限なし</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span>Stripe決済連携: 制限なし</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span className="font-semibold text-blue-600">解約リスク予測AI 搭載</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button 
                  onClick={handleCtaClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  30日間無料で試してみる
                </Button>
              </div>
            </Card>

            {/* プレミアム */}
            <Card className="border-blue-100 bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-slate-900">プレミアム</CardTitle>
                <CardDescription>大規模スクールや、自動化を極めたい事業者向け</CardDescription>
                <div className="pt-4">
                  <span className="text-3xl font-extrabold text-slate-900">
                    ¥{isYearly ? "39,840" : "49,800"}
                  </span>
                  <span className="text-sm text-slate-500"> / 月</span>
                  {isYearly && <p className="text-xs text-blue-600 font-semibold mt-1">年払い契約（一括請求）</p>}
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <div className="p-3 rounded-xl bg-blue-50/50 text-blue-700 text-xs font-semibold">
                  毎月 3,000クレジット 付与
                </div>
                <ul className="text-sm text-slate-600 space-y-2.5">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span className="font-semibold text-slate-800">会員サイト容量: 1,000GB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span>LP制作: 制限なし</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span>LINE連携: 制限なし</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span>Stripe決済連携: 制限なし</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" /> <span className="font-semibold text-blue-600">移行サポート（完全無料）</span>
                  </li>
                </ul>
              </CardContent>
              <div className="p-6 pt-0">
                <Button 
                  onClick={handleCtaClick}
                  variant="outline" 
                  className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  30日間無料で試してみる
                </Button>
              </div>
            </Card>

          </div>

          {/* クレジット追加購入プラン */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-slate-900">クレジットが足りなくなったら？</h3>
              <p className="text-sm text-slate-500 mt-1">繁忙期や大型ローンチ時など、必要なときにその場でスポット購入可能です。</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm text-center space-y-3">
                <p className="text-sm font-bold text-slate-500">スポット 500</p>
                <p className="text-3xl font-extrabold text-slate-900">¥2,980</p>
                <p className="text-xs text-slate-400">1クレジットあたり 約¥6.0</p>
                <Badge variant="outline" className="border-slate-200 text-slate-600">有効期限: 90日</Badge>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-sm text-center space-y-3 relative">
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-blue-100 text-blue-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  お得
                </div>
                <p className="text-sm font-bold text-blue-600">スポット 1,000</p>
                <p className="text-3xl font-extrabold text-blue-600">¥5,500</p>
                <p className="text-xs text-slate-400">1クレジットあたり 約¥5.5</p>
                <Badge className="bg-blue-50 text-blue-600 border border-blue-100">有効期限: 90日</Badge>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm text-center space-y-3">
                <p className="text-sm font-bold text-slate-500">スポット 3,000</p>
                <p className="text-3xl font-extrabold text-slate-900">¥15,000</p>
                <p className="text-xs text-slate-400">1クレジットあたり 約¥5.0</p>
                <Badge variant="outline" className="border-slate-200 text-slate-600">有効期限: 90日</Badge>
              </div>
            </div>

            {/* 定期クレジットパッケージ（年払い） */}
            <div className="p-6 md:p-8 rounded-3xl bg-blue-50/50 border border-blue-100/80">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-blue-100 pb-4 mb-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">ガッツリ使う方へ：定期クレジットパッケージ</h4>
                  <p className="text-xs text-slate-500 mt-1">年払いなら20%オフ。未使用クレジットは翌月に繰り越し可能です（最大2ヶ月分ストック可）。</p>
                </div>
                <Badge className="bg-blue-600 text-white">年払い契約で20%OFF</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-blue-100">
                  <div>
                    <p className="font-bold text-slate-800 text-sm">スタンダードパッケージ</p>
                    <p className="text-xs text-slate-400">毎月 3,000クレジット 自動追加</p>
                  </div>
                  <div className="text-right">
                    <p className="font-extrabold text-blue-600 text-lg">¥14,800 / 月</p>
                    <p className="text-[10px] text-slate-400">（1クレジットあたり 約¥4.9）</p>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-blue-100">
                  <div>
                    <p className="font-bold text-slate-800 text-sm">プレミアムパッケージ</p>
                    <p className="text-xs text-slate-400">毎月 10,000クレジット 自動追加</p>
                  </div>
                  <div className="text-right">
                    <p className="font-extrabold text-blue-600 text-lg">¥45,000 / 月</p>
                    <p className="text-[10px] text-slate-400">（1クレジットあたり 約¥4.5）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section id="faq" className="py-20 bg-white border-t border-slate-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest">よくあるご質問</h2>
            <p className="text-3xl font-bold text-slate-900 tracking-tight">疑問をクリアに</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            
            <AccordionItem value="item-1" className="border border-blue-50 rounded-2xl px-6 bg-slate-50/30">
              <AccordionTrigger className="hover:no-underline font-semibold text-slate-900 text-left py-4">
                Q1. 既存のツール（UTAGEやTeachable等）からの移行は可能ですか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed text-sm">
                A. はい、可能です。プレミアムプラン以上をご契約いただいたお客様には、現在お使いの会員サイトやLP、LINE連携のデータをKNOWLEDGE FORCEへ移行する作業を、当社の専門サポートスタッフが完全無料で代行・お手伝いいたします。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-blue-50 rounded-2xl px-6 bg-slate-50/30">
              <AccordionTrigger className="hover:no-underline font-semibold text-slate-900 text-left py-4">
                Q2. 自社のAIナレッジや教材データが他の事業者に漏洩することはありませんか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed text-sm">
                A. 一切ありません。ご登録いただいたコンテンツ、受講生のログ、過去の配信データなどはすべて暗号化され、あなたのアカウント専用の独立したデータベース（セキュアな隔離環境）にのみ蓄積されます。他社AIの学習に利用されることもありません。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-blue-50 rounded-2xl px-6 bg-slate-50/30">
              <AccordionTrigger className="hover:no-underline font-semibold text-slate-900 text-left py-4">
                Q3. プランの変更や解約はいつでも可能ですか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed text-sm">
                A. はい、月単位でアップグレード、ダウングレード、および解約がいつでも管理画面からワンクリックで可能です。ただし、解約された場合は蓄積された「AI学習資産（ナレッジ）」を引き継ぐことができなくなりますので、その点のみご注意ください。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-blue-50 rounded-2xl px-6 bg-slate-50/30">
              <AccordionTrigger className="hover:no-underline font-semibold text-slate-900 text-left py-4">
                Q4. AIに事業や教材を学習させるのは難しくありませんか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed text-sm">
                A. 非常に簡単です。教材のPDFや動画、テキスト、過去のメルマガなどを管理画面にドラッグ＆ドロップするだけで、AIが自動で内容を解析して学習します。プログラミングやプロンプトの専門知識は一切不要で、普段話しかけるようにチャットで指示を出すだけで機能します。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-blue-50 rounded-2xl px-6 bg-slate-50/30">
              <AccordionTrigger className="hover:no-underline font-semibold text-slate-900 text-left py-4">
                Q5. 会員サイトにアップロードできる動画コンテンツの容量に上限はありますか？
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 pb-4 leading-relaxed text-sm">
                A. プランごとに上限がございます。ベーシックは100GB、スタンダードは300GB、プレミアムは1,000GB（1TB）となっております。それ以上の容量が必要なエンタープライズ構成についても個別カスタマイズにて拡張可能です。
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </section>

      {/* 10. CLOSING / FINAL CTA */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-blue-50/80 border-t border-blue-100/50">
        <div className="container max-w-4xl text-center space-y-8">
          <img 
            src={logoUrl} 
            alt="KnowledgeForce Logo" 
            className="w-20 h-20 mx-auto object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            「今月入れたデータだけが、<br />来年のあなたの事業を変える。」
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            AI時代の教育・コンテンツビジネスにおいて、ナレッジの蓄積と自動化の「開始時期」の差は、後から取り戻すことができません。今すぐKNOWLEDGE FORCEで次世代の自走型事業を始めましょう。
          </p>
          
          <div className="pt-4">
            <Button 
              onClick={handleCtaClick}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-10 py-7 text-base md:text-lg shadow-lg shadow-blue-200 hover:shadow-xl transition-all group"
            >
              ナレッジフォースを30日間無料で試してみる
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-xs text-slate-400 mt-3 font-medium">クレジットカード登録不要・30日間すべての機能をお試しいただけます</p>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={logoUrl} 
              alt="KnowledgeForce Logo" 
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-base font-bold tracking-tight text-blue-600">KNOWLEDGE FORCE</span>
              <span className="text-[9px] text-slate-400 font-medium tracking-widest -mt-1">ナレッジフォース</span>
            </div>
          </div>
          
          <p className="text-xs text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} KNOWLEDGE FORCE. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
