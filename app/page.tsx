import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";


export default function About() {
  return (
    <>
      <Nav />
      <img
        src="/avatar.jpg"
        alt="Michael"
        width={120}
        height={120}
        style={{
          width: 120,
          height: 120,
          objectFit: "cover",
          marginBottom: "1.5rem",
        }}
      />
      <article className="prose-article">
        <p>
          2026-至今：Primilab，创始人&CEO，通过AI构建新的内容范式<br/>
          2015-2025：字节跳动，参与了今日头条、头条搜索、飞聊、金字节<br/>
          2013-2015：PingWest，记者<br/>
          2009-2013：人民大学，应用数学系<br/>
        </p>
        <p>
        目前主要focus在两个项目：<br/>
        - <a href="https://www.primilab.com">汽泡/Micca</a>，基于AI抠图的记录和创作社区<br/>
        - 动物心情，demo中<br/>
        </p>
        <p>
          对以下事情感兴趣：<br/>
          - AI：对生产力的提升<br/>
          - 商业：组织的构建和激励<br/>
          - 社区：网络的起点和周期<br/>
          - 心理学：认知、情绪、行为<br/>
          - 运动：天赋、训练、求胜欲<br/>
          - 美食：待客之道<br/>
          欢迎coffee chat
        </p>
        <p>
          长期招聘<a href="https://www.primilab.com/jobs/" target="_blank" rel="noreferrer">产品经理&工程师</a>
        </p>

        

        <p>
          邮箱：<a href="mailto:guohaifeng@primilab.com">guohaifeng@primilab.com</a><br />
        </p>
      
      </article>
      <Footer />
    </>
  );
}
