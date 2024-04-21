import config from "@/tailwind.config";
export default function FooterHolder() {
  const bgPrimary = config.theme.extend.colors.background;
  const accend = config.theme.extend.colors.footer.background;
  const border = config.theme.extend.colors.footer.border;
  return (
    <svg
      data-v-71082436=""
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -top-[11px] left-2/4 -translate-x-2/4 w-[457px] h-[81px]"
    >
      <path
        transform="translate(2,-10)scale(0.98 1)"
        d="M0 11L0 81L457 81L457 11C437.829 11.0529 418.512 15.1496 403 26.8997C382.649 42.3148 370.409 64.6582 342 64.9961C289.683 65.6185 237.321 65 185 65C158.885 65 128.558 69.2241 103 63.7894C80.3642 58.976 69.2681 39.664 52 26.5031C37.2926 15.2938 18.1986 11.1507 0 11z"
        fill={border}
      ></path>
      <path
        d="M7 0L7 1C23.2814 1.04494 39.9465 7.01331 52 18.0934C67.5995 32.433 79.048 53.1245 101 58.3457C126.665 64.45 157.665 60 184 60C236.987 60 290.017 60.6264 343 59.9961C370.154 59.6731 382.374 37.6814 400.004 21.0895C413.356 8.5235 430.602 1.01218 449 1C438.734 -3.30767 421.158 0 410 0L320 0L7 0z"
        fill={bgPrimary}
        stroke="0"
      ></path>
      <path
        d="M0 11L0 81L457 81L457 11C437.829 11.0529 418.512 15.1496 403 26.8997C382.649 42.3148 370.409 64.6582 342 64.9961C289.683 65.6185 237.321 65 185 65C158.885 65 128.558 69.2241 103 63.7894C80.3642 58.976 69.2681 39.664 52 26.5031C37.2926 15.2938 18.1986 11.1507 0 11z"
        fill={accend}
        stroke="0"
      ></path>
    </svg>
  );
}
