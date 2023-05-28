import { styled } from "styled-components";
import AuthCard from "../organisms/AuthCard";

function RegisterTemplate({ inputFileParam, btnText, title, link,onSubmitForm}) {
    return (
        <Content>
            <AuthCard inputFileParam={inputFileParam} btnText={btnText} title={title} link={link} onSubmitForm={onSubmitForm} />
        </Content>
    );
}

const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1233%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1234)'%3e%3c/rect%3e%3cpath d='M749.438%2c263.89C782.086%2c264.474%2c805.342%2c236.682%2c822.394%2c208.835C840.522%2c179.232%2c857.317%2c144.462%2c841.492%2c113.566C824.645%2c80.675%2c786.255%2c63.217%2c749.438%2c66.399C716.899%2c69.211%2c695.73%2c98.08%2c681.356%2c127.407C668.951%2c152.718%2c668.287%2c181.079%2c680.869%2c206.302C695.149%2c234.929%2c717.452%2c263.317%2c749.438%2c263.89' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M389.787%2c503.783C424.41%2c503.907%2c450.838%2c476.636%2c468.01%2c446.572C485.013%2c416.804%2c493.152%2c381.295%2c477.032%2c351.04C460.031%2c319.132%2c425.918%2c301.083%2c389.787%2c299.76C351.021%2c298.34%2c308.843%2c309.915%2c290.724%2c344.216C273.352%2c377.104%2c292.912%2c414.414%2c312.53%2c446.014C330.708%2c475.294%2c355.323%2c503.659%2c389.787%2c503.783' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1375.5598693574675 302.034103487527L1263.9425645526737 399.06154626512557 1472.587312135066 413.6514082923207z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M686.0599465679032 603.2036693086575L723.7777503701386 451.925820963806 572.4999020252872 414.2080171615707 534.7820982230518 565.4858655064221z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M85.28032471073749 248.04508528205974L177.27764240376283 330.87984219741287 260.112399319116 238.88252450438756 168.1150816260906 156.0477675890344z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M991.302%2c216.765C1023.011%2c216.851%2c1059.247%2c215.042%2c1075.128%2c187.597C1091.025%2c160.125%2c1076.678%2c126.446%2c1058.702%2c100.287C1043.366%2c77.97%2c1018.371%2c66.356%2c991.302%2c65.616C962.643%2c64.832%2c933.376%2c72.747%2c917.201%2c96.419C898.826%2c123.311%2c891.185%2c159.409%2c908.262%2c187.143C924.777%2c213.964%2c959.804%2c216.679%2c991.302%2c216.765' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1233'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1234'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(10%2c 15%2c 20%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
    a{
    font-size: 1rem;
    text-decoration: solid;
    text-decoration: underline;
  }
`
export default RegisterTemplate;