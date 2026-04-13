const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];

  function onlyValidDates(items) {
    return items.filter((s) => isValidDateString(s));
  }

  function isValidDateString(s) {
    let month;
    let day;

    if (s.includes('/')) {
      const parts = s.split('/');
      if (parts.length !== 3) {
        return false;
      }
      const [mStr, dStr, yStr] = parts;
      if (!/^\d{1,2}$/.test(mStr) || !/^\d{1,2}$/.test(dStr) || !/^\d{4}$/.test(yStr)) {
        return false;
      }
      month = parseInt(mStr, 10);
      day = parseInt(dStr, 10);
    } else if (s.includes('-')) {
      const parts = s.split('-');
      if (parts.length !== 3) {
        return false;
      }
      const [dStr, mStr, yStr] = parts;
      if (!/^\d{1,2}$/.test(dStr) || !/^\d{1,2}$/.test(mStr) || !/^\d{4}$/.test(yStr)) {
        return false;
      }
      day = parseInt(dStr, 10);
      month = parseInt(mStr, 10);
    } else {
      return false;
    }

    if (month < 1 || month > 12) {
      return false;
    }
    if (day < 1 || day > 31) {
      return false;
    }

    return true;
  }

  console.log('контрольная onlyValidDates:', onlyValidDates(arr));
