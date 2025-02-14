export default {
  title: 'Molecules/Banner',
};

export const BannerInfo = () => (
  <aside className="rl-banner__info">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
      <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Z" />
    </svg>
    <span>This is an info banner</span>
  </aside>
);
BannerInfo.storyName = 'banner (info)';
BannerInfo.parameters = {
  docs: {
    source: {
      dark: true,
      code: `
        <aside class="rl-banner__info">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Z"/>
            </svg>
            <span>
                This is an info banner
            </span>
        </aside>`,
      language: 'html',
    },
  },
};
export const BannerError = () => (
  <aside className="rl-banner__error">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
      <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Z" />
    </svg>
    <span>This is an error banner</span>
  </aside>
);
BannerError.storyName = 'banner (error)';
BannerError.parameters = {
  docs: {
    source: {
      dark: true,
      code: `
        <aside class="rl-banner__error">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Z"/>
            </svg>
            <span>
                This is an error banner
            </span>
        </aside>
      `,
      language: 'html',
    },
  },
};
