const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

  function onlyValidDates(items) {
    return items.map((s) => toNormalizedDateOrNull(s)).filter((x) => x !== null);
  }

  /** @returns {{ day: number, month: number, year: number } | null} */
  function parseDateParts(s) {
    let day;
    let month;
    let yearStr;

    if (s.includes('/')) {
      const parts = s.split('/');
      if (parts.length !== 3) {
        return null;
      }
      const [mStr, dStr, y] = parts;
      if (!/^\d{1,2}$/.test(mStr) || !/^\d{1,2}$/.test(dStr) || !/^\d{4}$/.test(y)) {
        return null;
      }
      month = parseInt(mStr, 10);
      day = parseInt(dStr, 10);
      yearStr = y;
    } else if (s.includes('-')) {
      const parts = s.split('-');
      if (parts.length !== 3) {
        return null;
      }
      const [dStr, mStr, y] = parts;
      if (!/^\d{1,2}$/.test(dStr) || !/^\d{1,2}$/.test(mStr) || !/^\d{4}$/.test(y)) {
        return null;
      }
      day = parseInt(dStr, 10);
      month = parseInt(mStr, 10);
      yearStr = y;
    } else {
      return null;
    }

    const year = parseInt(yearStr, 10);
    return { day, month, year };
  }

  function isLeapYear(y) {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  }

  function maxDayInMonth(month, year) {
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let max = days[month - 1];
    if (month === 2 && isLeapYear(year)) {
      max = 29;
    }
    return max;
  }

  function isRealCalendarDate(day, month, year) {
    if (month < 1 || month > 12) {
      return false;
    }
    if (day < 1 || day > maxDayInMonth(month, year)) {
      return false;
    }
    return true;
  }

  function formatDdMmYyyy(day, month, year) {
    const d = String(day).padStart(2, '0');
    const m = String(month).padStart(2, '0');
    return `${d}-${m}-${year}`;
  }

  /** Валидная дата → строка DD-MM-YYYY; иначе null */
  function toNormalizedDateOrNull(s) {
    const p = parseDateParts(s);
    if (p === null) {
      return null;
    }
    if (!isRealCalendarDate(p.day, p.month, p.year)) {
      return null;
    }
    return formatDdMmYyyy(p.day, p.month, p.year);
  }

  console.log('контрольная onlyValidDates:', onlyValidDates(arr));