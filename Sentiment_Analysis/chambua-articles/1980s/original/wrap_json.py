#!/usr/bin/env python
# -*- coding: utf-8 -*-
# this is a script to wrap files in text:{} for Chambua
# internews KE HIV@30 project
import sys
import traceback
import argparse
import glob
import json


def main():
    parser = argparse.ArgumentParser(description='Wrap file content in json')
    parser.add_argument('-p', '--pattern', default='./*.txt', help='foo')
    args = parser.parse_args()

    fix_encoding = lambda s: s.decode('utf-8', 'replace')

    for file in glob.glob(args.pattern):
        with open(file, "r+") as f:
            content = fix_encoding(f.read())
            content = content.rstrip('\r\n')
            content = json.dumps({'text': content}, ensure_ascii=True)
            f.seek(0)
            try:
                f.write((content))
            except Exception, e:
                print e

if __name__ == '__main__':
    try:
        main()
        sys.exit(0)
    except KeyboardInterrupt, e:
        raise e
    except SystemExit, e:
        raise e
    except Exception, e:
        print str(e)
        traceback.print_exc()
        sys.exit(1)
