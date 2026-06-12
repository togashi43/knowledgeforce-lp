import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Check, 
  Zap, 
  Layers, 
  Clock, 
  TrendingUp, 
  MessageSquare, 
  Database, 
  ShieldAlert, 
  DollarSign, 
  ChevronRight, 
  Bot, 
  Sparkles, 
  Users, 
  LineChart, 
  Video, 
  Mail, 
  HelpCircle,
  FileText,
  Workflow,
  Menu
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { toast } from "sonner";

// 透過ロゴURLの定義
const LOGO_HORIZONTAL = "/manus-storage/logo-04-trans-refined_edc96052.png"; // KNOWLEDGE FORCE + ナレッジフォース
const LOGO_VERTICAL = "/manus-storage/logo-02-trans-refined_e102a073.png"; // 縦型

// 生成した高品質ヒーロー画像
const HERO_BG_COMPRESSED = "https://d2xsxph8kpxj0f.cloudfront.net/310419663031980646/6Aq6kDVLfWbaKavmKYSN2R/hero-bg-ghbzX952QSbWmFenrNf6Ca.webp";

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [activeTab, setActiveTab] = useState<"features" | "ai" | "impact">("features");
  
  // コストシミュレータ用の状態
  const [studentCount, setStudentCount] = useState<number>(100);
  const [hasSupportStaff, setHasSupportStaff] = useState<boolean>(true);
  const [hasLpOutsourcing, setHasLpOutsourcing] = useState<boolean>(true);

  // 料金計算ロジック
  const currentCost = useMemo(() => {
    let toolCost = 80000; // 平均的なツール群 (UTAGE, Teachable, LINE等)
    let staffCost = hasSupportStaff ? 150000 : 0;
    let outsourceCost = hasLpOutsourcing ? 50000 : 0;
    return (toolCost + staffCost + outsourceCost) * 12;
  }, [hasSupportStaff, hasLpOutsourcing]);

  const kfCost = useMemo(() => {
    // 規模に応じたプランの選択
    let monthlyPrice = 49800; // 100人以上はプレミアム/エンタープライズ
    if (studentCount <= 10) {
      monthlyPrice = 4980;
    } else if (studentCount <= 50) {
      monthlyPrice = 14800;
    } else if (studentCount <= 500) {
      monthlyPrice = 49800;
    } else {
      monthlyPrice = 100000; // エンタープライズ想定
    }
    
    // サポートスタッフが減る（AI代替）
    let staffCost = hasSupportStaff ? 30000 : 0; // 1/5に削減
    return (monthlyPrice + staffCost) * 12;
  }, [studentCount, hasSupportStaff]);

  const savedCost = useMemo(() => {
    return Math.max(0, currentCost - kfCost);
  }, [currentCost, kfCost]);

  const handleCtaClick = (buttonName: string) => {
    toast.success(`${buttonName}の無料相談フォームを開きます（プレースホルダー）`, {
      description: "本番環境では、お問い合わせフォームや予約カレンダーに遷移します。",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      {/* 1. ナビゲーションバー */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={LOGO_HORIZONTAL} 
              alt="KNOWLEDGE FORCE" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#problem" className="hover:text-primary transition-colors">課題の本質</a>
            <a href="#concept" className="hover:text-primary transition-colors">コンセプト</a>
            <a href="#features" className="hover:text-primary transition-colors">主要機能</a>
            <a href="#simulation" className="hover:text-primary transition-colors">費用シミュレーション</a>
            <a href="#pricing" className="hover:text-primary transition-colors">料金プラン</a>
            <a href="#faq" className="hover:text-primary transition-colors">よくある質問</a>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:inline-flex"
              onClick={() => handleCtaClick("ログイン")}
            >
              ログイン
            </Button>
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-xs md:text-sm px-3 md:px-4"
              onClick={() => handleCtaClick("ヘッダー無料相談")}
            >
              無料相談に申し込む
            </Button>

            {/* モバイル用ハンバーガーメニュー */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden h-9 w-9 p-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">メニューを開く</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <SheetHeader className="text-left border-b border-slate-100 pb-4">
                  <SheetTitle className="flex items-center gap-2">
                    <img 
                      src={LOGO_HORIZONTAL} 
                      alt="KNOWLEDGE FORCE" 
                      className="h-8 w-auto object-contain"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6 text-sm font-medium">
                  <a href="#problem" className="py-2 hover:text-primary transition-colors border-b border-slate-50">課題の本質</a>
                  <a href="#concept" className="py-2 hover:text-primary transition-colors border-b border-slate-50">コンセプト</a>
                  <a href="#features" className="py-2 hover:text-primary transition-colors border-b border-slate-50">主要機能</a>
                  <a href="#simulation" className="py-2 hover:text-primary transition-colors border-b border-slate-50">費用シミュレーション</a>
                  <a href="#pricing" className="py-2 hover:text-primary transition-colors border-b border-slate-50">料金プラン</a>
                  <a href="#faq" className="py-2 hover:text-primary transition-colors border-b border-slate-50">よくある質問</a>
                  <div className="flex flex-col gap-2 pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full justify-center"
                      onClick={() => handleCtaClick("モバイルログイン")}
                    >
                      ログイン
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* 2. ヒーローセクション */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-blue-50/40 via-white to-background">
        {/* 背景のグラデーションオーブ */}
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-300/10 blur-3xl" />
        
        <div className="container grid gap-12 lg:grid-cols-12 items-center">
          {/* 左側：コピー・メッセージ */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border-none animate-pulse">
              The All-in-One AI System for Education & Content Business
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              創造、構築、提供を<br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                一気通貫で最適に。
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              KNOWLEDGE FORCE（ナレッジフォース）は、教育・コンテンツ販売事業の「教材創造」「サイト構築」「サービス提供」のすべてを自社専用の学習型AIで最適化・自動化する、次世代のオールインワンAIシステムです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-md px-8 py-6 h-auto shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => handleCtaClick("ヒーローメイン無料相談")}
              >
                無料相談から始める
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-md px-8 py-6 h-auto hover:bg-slate-50 transition-all duration-300"
                onClick={() => {
                  document.getElementById("concept")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                詳細を見る
              </Button>
            </div>
            
            {/* 実績・信頼性の表示 */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-slate-100 w-full">
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">¥50億+</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">累計売上</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">160社+</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">取引社数</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">90+</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">対応ジャンル</p>
              </div>
            </div>
          </div>
          
          {/* 右側：3Dビジュアル */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-square">
              {/* 生成した3Dヒーロー画像を大きく表示 */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/80 bg-white/40 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.01]">
                <img 
                  src={HERO_BG_COMPRESSED} 
                  alt="Knowledge Force AI Integration Visual" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* 浮遊するミニロゴバッジ */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2 sm:gap-3 animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="bg-primary/10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
                  <Bot className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-800">自社専用AI</p>
                  <p className="text-[8px] sm:text-[10px] text-muted-foreground">使うほど賢くなる</p>
                </div>
              </div>
              
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2 sm:gap-3 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <div className="bg-cyan-500/10 p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
                  <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 text-cyan-600" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-slate-800">年間¥370万削減</p>
                  <p className="text-[8px] sm:text-[10px] text-muted-foreground">不要ツールを一掃</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 課題提起セクション */}
      <section id="problem" className="py-20 md:py-28 bg-slate-50 border-y border-slate-100">
        <div className="container text-center">
          <Badge variant="outline" className="px-3 py-1 text-xs font-semibold text-primary border-primary/20 bg-primary/5 mb-4">
            THE STRUCTURAL PROBLEM
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            市場は伸びているのに、なぜ運営者は伸び悩むのか？
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-md md:text-lg mb-12">
            国内eラーニング市場や個人コンテンツ販売市場は年率成長を続けています。しかし、多くの事業者が「ツールの乱立」と「見えない隠れコスト」という構造的な課題に直面し、疲弊しています。
          </p>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {/* 課題1 */}
            <Card className="bg-white border-none shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-8 flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-red-50 rounded-2xl text-red-500">
                  <Layers className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">構造課題①: ツールの乱立と分断</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  会員サイト、LP制作、動画配信、LINE構築、決済など、平均9種類ものツールを併用。データはバラバラに分断され、月額4.5万〜15万円もの固定費が発生。
                </p>
              </CardContent>
            </Card>

            {/* 課題2 */}
            <Card className="bg-white border-none shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-8 flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-red-50 rounded-2xl text-red-500">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">構造課題②: 膨大な「隠れコスト」</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ツール代だけでなく、設定・連携、会員からの問い合わせ対応、LPやLINE配信文の制作に毎月数十時間が奪われます。人件費換算で年間最大450万円もの損失に。
                </p>
              </CardContent>
            </Card>

            {/* 課題3 */}
            <Card className="bg-white border-none shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 pb-8 flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-red-50 rounded-2xl text-red-500">
                  <ShieldAlert className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">構造課題③: AIが事業を理解しない</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ChatGPTなどの汎用AIは「一般論」しか返さず、あなたのビジネスの文脈や、受講生の実際の行動データを理解した具体的な改善・自動化はできません。
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* 比較テーブル */}
          <div className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-slate-100 text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              合理的な選択：スタッフを増やすか、システムを導入するか
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 text-muted-foreground">
                    <th className="pb-3 font-medium">比較項目</th>
                    <th className="pb-3 font-medium text-red-500">選択肢A: スタッフを増やす</th>
                    <th className="pb-3 font-medium text-primary">選択肢B: KNOWLEDGE FORCE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-slate-700">
                  <tr>
                    <td className="py-4 font-semibold">コスト</td>
                    <td className="py-4 text-red-500/80">採用コスト30万〜100万円/人 + 月30万円以上</td>
                    <td className="py-4 text-primary font-semibold">月数千円〜数万円の固定費のみ</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold">教育期間</td>
                    <td className="py-4">戦力化まで3〜6ヶ月の教育が必要</td>
                    <td className="py-4">導入即日から24時間365日稼働</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold">定着率</td>
                    <td className="py-4">業界平均2年未満での離職リスク</td>
                    <td className="py-4">離職なし、使うほど自社専用に学習し資産化</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. コンセプト・座組セクション */}
      <section id="concept" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] rounded-full bg-blue-50/30 blur-3xl" />
        
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="px-3 py-1 text-xs font-semibold text-primary border-primary/20 bg-primary/5 mb-4">
              THE SOLUTION
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              ツールを買うのではない。<br />事業を理解する「唯一のAI」を育てる。
            </h2>
            <p className="text-muted-foreground text-md md:text-lg">
              KNOWLEDGE FORCEは単なる機能の集合体（配管の統合）ではありません。あなたの事業ノウハウをすべて学習し、自動で業務を代替する「自社専用AI」を構築するシステムです。
            </p>
          </div>

          {/* 3つの転換 */}
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-20">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4">
              <div className="text-xs font-bold text-primary tracking-widest uppercase">TRANSFORMATION 01</div>
              <h3 className="text-xl font-bold text-slate-800">コスト構造の転換</h3>
              <div className="text-sm text-muted-foreground flex flex-col gap-2">
                <span className="line-through text-red-400">Before: 年間180万〜450万円のバラバラなツール代と人件費</span>
                <span className="text-primary font-semibold">After: 月額 ¥4,980〜 の最適化されたインフラ費用へ</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4">
              <div className="text-xs font-bold text-primary tracking-widest uppercase">TRANSFORMATION 02</div>
              <h3 className="text-xl font-bold text-slate-800">業務構造の転換</h3>
              <div className="text-sm text-muted-foreground flex flex-col gap-2">
                <span className="line-through text-red-400">Before: 人がすべてのツールを操作し、作業に追われる事業</span>
                <span className="text-primary font-semibold">After: AIが動き、人はクリエイティブな意思決定に集中する事業へ</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-4">
              <div className="text-xs font-bold text-primary tracking-widest uppercase">TRANSFORMATION 03</div>
              <h3 className="text-xl font-bold text-slate-800">資産構造 of DATA</h3>
              <div className="text-sm text-muted-foreground flex flex-col gap-2">
                <span className="line-through text-red-400">Before: 運営者の頭の中やバラバラのメモに散らばるノウハウ</span>
                <span className="text-primary font-semibold">After: 「学習済み自社AI」という、永続的に価値を生む企業資産へ</span>
              </div>
            </div>
          </div>

          {/* 2層のAI支援（座組） */}
          <div className="max-w-4xl mx-auto bg-slate-900 text-slate-100 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
            
            <div className="relative flex flex-col gap-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
                <div>
                  <Badge className="bg-primary/20 text-primary border-none mb-2">AI ARCHITECTURE</Badge>
                  <h3 className="text-2xl font-bold">2層のAI支援（ダブルレイヤーAI）</h3>
                </div>
                <p className="text-sm text-slate-400 max-w-md">
                  運営者（あなた）への業務自動化支援と、受講生（顧客）への学習支援を同時に実現する唯一無二のアーキテクチャ。
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* 運営者向け */}
                <div className="flex flex-col gap-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-xl">
                      <Workflow className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold">レイヤー1: 運営者へのAI支援</h4>
                  </div>
                  <ul className="text-sm text-slate-300 flex flex-col gap-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>教材をAIにドラッグ＆ドロップするだけで自動学習</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>あなたの強みを分析し、LP原稿やLINE導線を自動生成</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>受講生の離脱予兆や売上・決済データを自動でアラート</span>
                    </li>
                  </ul>
                </div>

                {/* 受講生向け */}
                <div className="flex flex-col gap-4 bg-slate-800/50 p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500 rounded-xl">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold">レイヤー2: 受講生へのAI支援</h4>
                  </div>
                  <ul className="text-sm text-slate-300 flex flex-col gap-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-cyan-400 mt-1 shrink-0" />
                      <span>会員サイトに「あなたの分身」となるAIアシスタントが常駐</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-cyan-400 mt-1 shrink-0" />
                      <span>教材データのみを正とし、24時間365日いつでも受講生に回答</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-cyan-400 mt-1 shrink-0" />
                      <span>受講生の学習行動ログに基づき、パーソナライズされた体験を提供</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 主要機能セクション */}
      <section id="features" className="py-20 md:py-28 bg-slate-50 border-y border-slate-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="px-3 py-1 text-xs font-semibold text-primary border-primary/20 bg-primary/5 mb-4">
              SYSTEM FEATURES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              「創造・構築・提供」のすべてを網羅する、6つの主要機能
            </h2>
            <p className="text-muted-foreground text-md md:text-lg">
              別々の高額ツールを契約する必要はもうありません。KNOWLEDGE FORCEなら、事業に必要なコア機能が最初から1つに統合されています。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* 機能1 */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 flex flex-col gap-4">
                <div className="p-3 bg-blue-50 text-primary rounded-2xl w-fit">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">① AI学習会員サイト</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  大容量・高速の動画配信ホスティングを内蔵。受講生の学習進捗を自動でトラッキングし、活動低下を検知するとAIが「離脱予兆アラート」を自動通知。
                </p>
                <div className="text-xs font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-lg w-fit">
                  既存ツール代 ¥17,000〜¥45,000/月を統合
                </div>
              </CardContent>
            </Card>

            {/* 機能2 */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 flex flex-col gap-4">
                <div className="p-3 bg-blue-50 text-primary rounded-2xl w-fit">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">② あなたらしいLP制作</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  あなたの事業ノウハウを深く理解したAIが、業界別CV最適化済みテンプレートをベースに、ターゲットに刺さるコンセプト・コピーを自動生成。
                </p>
                <div className="text-xs font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-lg w-fit">
                  既存ツール代 ¥3,000〜¥10,000/月を統合
                </div>
              </CardContent>
            </Card>

            {/* 機能3 */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 flex flex-col gap-4">
                <div className="p-3 bg-blue-50 text-primary rounded-2xl w-fit">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">③ LINE・メール連携</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  「数字を見に行く」から「数字に呼ばれる」運用へ。LP閲覧や決済完了などの行動データをトリガーに、AIが最適な配信文を提案・自動配信。
                </p>
                <div className="text-xs font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-lg w-fit">
                  既存ツール代 ¥10,000〜¥40,000/月を統合
                </div>
              </CardContent>
            </Card>

            {/* 機能4 */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 flex flex-col gap-4">
                <div className="p-3 bg-blue-50 text-primary rounded-2xl w-fit">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">④ 高度な決済 (Stripe基盤)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  サブスクリプション、分割決済、ワンタイム決済のすべてに対応。課金状況のリアルタイム可視化に加え、解約リスクの高い顧客をAIが自動で検出。
                </p>
                <div className="text-xs font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-lg w-fit">
                  決済データも自動でAIの学習ナレッジに反映
                </div>
              </CardContent>
            </Card>

            {/* 機能5 */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 flex flex-col gap-4">
                <div className="p-3 bg-blue-50 text-primary rounded-2xl w-fit">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">⑤ データ一元管理＆AI事業分析</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  学習履歴、LINE配信、決済状況、CSチャットログなど、分断されていたすべてのデータを1つのダッシュボードに自動で一元管理。蓄積された実データに基づき、AIがLTV最大化のための最適な仮説を提示します。
                </p>
                <div className="text-xs font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-lg w-fit">
                  散らばったデータを一箇所に完全集約
                </div>
              </CardContent>
            </Card>

            {/* 機能6 */}
            <Card className="bg-white border-none shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8 pb-8 flex flex-col gap-4">
                <div className="p-3 bg-blue-50 text-primary rounded-2xl w-fit">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">⑥ カスタムCSボット</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  あなたの教材や過去のQ&Aのみを正として答えるAI。質問の8〜9割を自動解決し、サポート工数をほぼゼロに。受講生の顧客満足度を最大化。
                </p>
                <div className="text-xs font-semibold text-primary bg-blue-50 px-3 py-1.5 rounded-lg w-fit">
                  問い合わせ対応時間を月20〜40時間削減
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. インタラクティブ費用削減シミュレーター */}
      <section id="simulation" className="py-20 md:py-28 relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="px-3 py-1 text-xs font-semibold text-primary border-primary/20 bg-primary/5 mb-4">
              COST SIMULATION
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              年間でいくら削減できる？<br />インタラクティブ・シミュレーター
            </h2>
            <p className="text-muted-foreground text-md md:text-lg">
              現在の運営規模やスタッフ状況を入力するだけで、KNOWLEDGE FORCE導入による年間の削減コストと売上インパクトを瞬時に算出します。
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 max-w-5xl mx-auto items-start">
            {/* 左側：入力コントロール */}
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col gap-8">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4">
                現在の運営状況を入力
              </h3>
              
              {/* 受講生数スライダー */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-slate-700">受講生（会員）数</span>
                  <span className="text-primary font-bold">{studentCount} 名</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="1000" 
                  step="5"
                  value={studentCount} 
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] text-muted-foreground">
                  <span>5名</span>
                  <span>500名</span>
                  <span>1,000名+</span>
                </div>
              </div>

              {/* サポートスタッフの有無 */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-700">サポートスタッフの雇用</p>
                  <p className="text-xs text-muted-foreground">問い合わせ対応等の人件費</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={hasSupportStaff}
                  onChange={(e) => setHasSupportStaff(e.target.checked)}
                  className="w-10 h-6 bg-slate-200 rounded-full appearance-none checked:bg-primary relative before:content-[''] before:absolute before:h-4 before:w-4 before:bg-white before:rounded-full before:top-1 before:left-1 checked:before:translate-x-4 before:transition-transform cursor-pointer"
                />
              </div>

              {/* LP外注の有無 */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-700">LP・配信文の外注</p>
                  <p className="text-xs text-muted-foreground">制作やコピーライティングの費用</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={hasLpOutsourcing}
                  onChange={(e) => setHasLpOutsourcing(e.target.checked)}
                  className="w-10 h-6 bg-slate-200 rounded-full appearance-none checked:bg-primary relative before:content-[''] before:absolute before:h-4 before:w-4 before:bg-white before:rounded-full before:top-1 before:left-1 checked:before:translate-x-4 before:transition-transform cursor-pointer"
                />
              </div>
            </div>

            {/* 右側：シミュレーション結果 */}
            <div className="lg:col-span-7 bg-slate-900 text-slate-100 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
              
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                シミュレーション結果（年間目安）
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-6 border-y border-slate-800">
                <div>
                  <p className="text-xs text-slate-400">現状の年間総コスト</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-red-400">
                    ¥{(currentCost / 10000).toLocaleString()}万円
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <p className="text-xs text-slate-400">導入後の年間総コスト</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-400">
                    ¥{(kfCost / 10000).toLocaleString()}万円
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/80 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-slate-800 flex flex-col gap-2">
                <p className="text-[10px] sm:text-xs text-cyan-400 font-bold uppercase tracking-wider">KNOWLEDGE FORCE によるコスト削減効果</p>
                <p className="text-2xl sm:text-3xl md:text-5xl font-black text-white">
                  年間 ¥{(savedCost / 10000).toLocaleString()} 万円 浮く！
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-2">
                  ※バラバラに契約していたツール群の解約、AIによる問い合わせ自動化（人件費削減）、AIライターによる外注費削減を含みます。
                </p>
              </div>

              {/* 売上向上インパクト */}
              <div className="flex flex-col gap-3">
                <p className="text-xs text-slate-400">さらに売上自体を構造的に押し上げるインパクト</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="bg-slate-800/40 p-3 rounded-xl">
                    <p className="text-xs text-slate-400">継続率・LTV</p>
                    <p className="text-sm font-bold text-cyan-400">+15〜25%</p>
                  </div>
                  <div className="bg-slate-800/40 p-3 rounded-xl">
                    <p className="text-xs text-slate-400">LP・決済転換率</p>
                    <p className="text-sm font-bold text-cyan-400">+20〜30%</p>
                  </div>
                  <div className="bg-slate-800/40 p-3 rounded-xl">
                    <p className="text-xs text-slate-400">商談アポ数</p>
                    <p className="text-sm font-bold text-cyan-400">1.5〜2倍</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 料金プランセクション */}
      <section id="pricing" className="py-20 md:py-28 bg-slate-50 border-y border-slate-100">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="px-3 py-1 text-xs font-semibold text-primary border-primary/20 bg-primary/5 mb-4">
              PRICING PLANS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              事業フェーズに合わせて選べる4つのプラン
            </h2>
            <p className="text-muted-foreground text-md md:text-lg">
              初期立ち上げから大規模運営まで、無駄のない料金体系。プランのアップグレードはワンクリックでいつでも完結します。
            </p>
            
            {/* 年払いトグル */}
            <div className="flex items-center justify-center gap-4 mt-8 bg-white p-1.5 rounded-full shadow-sm border border-slate-100 w-fit mx-auto">
              <button 
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${billingCycle === "monthly" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-slate-800"}`}
              >
                月払い
              </button>
              <button 
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all flex items-center gap-1.5 ${billingCycle === "yearly" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-slate-800"}`}
              >
                年払い
                <span className="bg-cyan-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">2ヶ月分お得</span>
              </button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto items-stretch">
            {/* ベーシック */}
            <Card className="bg-white border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <CardContent className="pt-8 pb-8 flex flex-col gap-6 h-full">
                <div>
                  <p className="text-sm font-bold text-muted-foreground">ベーシック</p>
                  <p className="text-xs text-muted-foreground mt-1">これから始める方</p>
                  <div className="mt-4">
                    <span className="text-3xl font-extrabold text-slate-900">
                      ¥{billingCycle === "monthly" ? "4,980" : "4,150"}
                    </span>
                    <span className="text-xs text-muted-foreground"> /月 (税込)</span>
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4 flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>受講生数: 最大 10人</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>動画容量: 100 GB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>LP作成数: 5 ページ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>AIクレジット: 100 /月</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-auto"
                  onClick={() => handleCtaClick("ベーシックプラン")}
                >
                  このプランで始める
                </Button>
              </CardContent>
            </Card>

            {/* スタンダード */}
            <Card className="bg-white border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <CardContent className="pt-8 pb-8 flex flex-col gap-6 h-full">
                <div>
                  <p className="text-sm font-bold text-muted-foreground">スタンダード</p>
                  <p className="text-xs text-muted-foreground mt-1">立ち上げを加速したい方</p>
                  <div className="mt-4">
                    <span className="text-3xl font-extrabold text-slate-900">
                      ¥{billingCycle === "monthly" ? "14,800" : "12,333"}
                    </span>
                    <span className="text-xs text-muted-foreground"> /月 (税込)</span>
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4 flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>受講生数: 最大 50人</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>動画容量: 300 GB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>LP作成数: 10 ページ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>AIクレジット: 300 /月</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>LINE・メール配信 連携</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-auto"
                  onClick={() => handleCtaClick("スタンダードプラン")}
                >
                  このプランで始める
                </Button>
              </CardContent>
            </Card>

            {/* プレミアム */}
            <Card className="bg-white border-2 border-primary shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                一番人気
              </div>
              <CardContent className="pt-8 pb-8 flex flex-col gap-6 h-full">
                <div>
                  <p className="text-sm font-bold text-primary">プレミアム</p>
                  <p className="text-xs text-muted-foreground mt-1">CSボットをフル活用する事業者</p>
                  <div className="mt-4">
                    <span className="text-3xl font-extrabold text-slate-900">
                      ¥{billingCycle === "monthly" ? "49,800" : "41,500"}
                    </span>
                    <span className="text-xs text-muted-foreground"> /月 (税込)</span>
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-4 flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span className="font-semibold text-slate-800">受講生数: 最大 500人</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>動画容量: 1,000 GB (1TB)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span className="font-semibold text-slate-800">カスタムCSボット 無制限</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>AIクレジット: 1,000 /月</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>ファネルテンプレート機能</span>
                  </div>
                </div>
                <Button 
                  className="w-full mt-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                  onClick={() => handleCtaClick("プレミアムプラン")}
                >
                  このプランで始める
                </Button>
              </CardContent>
            </Card>

            {/* エンタープライズ */}
            <Card className="bg-slate-900 text-slate-100 border-none shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <CardContent className="pt-8 pb-8 flex flex-col gap-6 h-full">
                <div>
                  <p className="text-sm font-bold text-cyan-400">エンタープライズ</p>
                  <p className="text-xs text-slate-400 mt-1">複数ブランド・大規模運営</p>
                  <div className="mt-4">
                    <span className="text-3xl font-extrabold text-white">要相談</span>
                  </div>
                </div>
                <div className="border-t border-slate-800 pt-4 flex flex-col gap-3 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>受講生数: 500名以上〜無制限</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>動画容量: カスタム拡張可能</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>専任担当者による伴走サポート</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-cyan-400 shrink-0" />
                    <span>自社専用カスタム開発</span>
                  </div>
                </div>
                <Button 
                  variant="secondary" 
                  className="w-full mt-auto bg-white text-slate-900 hover:bg-slate-100"
                  onClick={() => handleCtaClick("エンタープライズ問い合わせ")}
                >
                  お問い合わせ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. よくあるご質問（FAQ） */}
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="px-3 py-1 text-xs font-semibold text-primary border-primary/20 bg-primary/5 mb-4">
              FREQUENTLY ASKED QUESTIONS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              よくあるご質問
            </h2>
            <p className="text-muted-foreground text-md">
              KNOWLEDGE FORCEの導入や移行、AIの仕組みに関する代表的なご質問にお答えします。
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-slate-800">
                Q1. 既存のツール（Teachable、UTAGE、Lステップ等）からの移行は簡単ですか？
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                はい、非常にスムーズに移行可能です。専任サポートチーム（※上位プラン対象）が、既存の会員データや動画教材、LINE導線の引っ越し作業を丁寧にサポートいたします。また、すべてのデータをKNOWLEDGE FORCEに集約することで、データ連携の手間やエラーが完全に解消されます。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-slate-800">
                Q2. 自社の教材やAIナレッジデータが他社に共有・学習される心配はありませんか？
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                一切ありません。お客様のアカウントごとに完全に分離されたデータベースと独立したAIナレッジスペースを構築しています。お客様の登録された教材や顧客の行動ログが、他社アカウントのAIモデルに学習されたり漏洩したりすることはシステム構造上、絶対にありませんのでご安心ください。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-slate-800">
                Q3. AIクレジットとは何ですか？使い切った場合はどうなりますか？
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                AIクレジットは、LP生成、LINE配信文作成、カスタムCSチャットボットでの自動回答、AI事業相談など、システム内のAI機能を使用する際に消費される単位です。各プランに毎月一定のクレジットが付属しており、万が一使い切った場合でも、管理画面からいつでも必要な分だけ追加購入が可能です。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left font-bold text-slate-800">
                Q4. プラン変更はいつでも可能ですか？
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                はい、月単位でいつでもアップグレード、ダウングレードが可能です。事業の立ち上げ期はベーシックやスタンダードから開始し、受講生が増えてきたタイミングでプレミアムへワンクリックで移行することができます。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left font-bold text-slate-800">
                Q5. AIに事業や教材を学習させるのは難しい専門知識が必要ですか？
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                専門知識は一切不要です。普段あなたが使っている教材PDF、動画ファイル、過去の質問回答テキストを管理画面にドラッグ＆ドロップするだけで、AIが自動で内容を解析・学習します。普段スタッフや受講生に話しかけるように、自然な日本語で指示を出すだけでAIが最適な回答やコンテンツを作成します。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 9. クロージング（CTA）セクション */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-blue-900 to-slate-950 text-white relative overflow-hidden">
        {/* 背景の光る円 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-primary/20 blur-3xl" />
        
        <div className="container max-w-4xl text-center flex flex-col items-center gap-8">
          <img 
            src={LOGO_VERTICAL} 
            alt="KNOWLEDGE FORCE" 
            className="h-20 w-auto object-contain mb-4"
          />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            まずは無料相談から始めましょう
          </h2>
          <p className="text-slate-300 text-md md:text-lg max-w-2xl leading-relaxed">
            AIの蓄積差は、時間が経つほど埋まらなくなります。今月開始したデータ学習だけが、来年のあなたの事業を圧倒的に成長させます。
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-slate-900 hover:bg-slate-100 text-md px-10 py-7 h-auto font-bold shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            onClick={() => handleCtaClick("クロージング無料相談")}
          >
            無料相談に申し込む
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-slate-800 w-full text-left mt-8">
            <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800">
              <p className="text-cyan-400 font-bold text-lg mb-1">コスト削減 / 年</p>
              <p className="text-sm text-slate-300">バラバラなツールと人件費を最適化し、年間約370万円を削減。</p>
            </div>
            <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800">
              <p className="text-cyan-400 font-bold text-lg mb-1">売上向上 / 年</p>
              <p className="text-sm text-slate-300">LP転換率・LTVの最大化により、売上を構造的に押し上げ。</p>
            </div>
            <div className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800">
              <p className="text-cyan-400 font-bold text-lg mb-1">事業知見のAI資産化</p>
              <p className="text-sm text-slate-300">頭の中のノウハウを「学習済みAI」として永続的な企業資産へ。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. フッター */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <img 
              src={LOGO_HORIZONTAL} 
              alt="KNOWLEDGE FORCE" 
              className="h-8 w-auto object-contain brightness-0 invert self-start"
            />
            <p className="text-xs text-slate-500 leading-relaxed">
              教育・コンテンツ販売事業の「創造・構築・提供」を、一気通貫で最適化するAIシステム。
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-slate-200 mb-4">サービス機能</h4>
            <ul className="text-xs flex flex-col gap-2">
              <li>AI学習会員サイト</li>
              <li>LP制作アシスタント</li>
              <li>LINE・メール配信自動化</li>
              <li>Stripe決済連携</li>
              <li>データ一元管理＆AI事業分析</li>
              <li>カスタムCSチャットボット</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-200 mb-4">プラン</h4>
            <ul className="text-xs flex flex-col gap-2">
              <li>ベーシックプラン</li>
              <li>スタンダードプラン</li>
              <li>プレミアムプラン</li>
              <li>エンタープライズ</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-200 mb-4">運営会社</h4>
            <p className="text-xs text-slate-300 font-bold mb-1">MODE-1 PARTNERS株式会社</p>
            <p className="text-xs text-slate-500 mb-2">代表者：岩世 祐生</p>
            <p className="text-xs text-slate-500">
              東京都中央区日本橋富沢町10番13号<br />
              WORKEDITION NIHONBASHI 4F
            </p>
          </div>
        </div>
        
        <div className="container border-t border-slate-900 mt-12 pt-6 text-center text-xs text-slate-600">
          <p>© 2026 KNOWLEDGE FORCE / MODE-1 PARTNERS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
