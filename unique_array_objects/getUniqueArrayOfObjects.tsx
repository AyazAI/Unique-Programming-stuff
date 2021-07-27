const uniqueArray = (a: any) =>
  [...Array.from(new Set(a.map((o: any) => JSON.stringify(o))))].map((s: any) =>
    JSON.parse(s)
  );
