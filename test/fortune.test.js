import Fortune from '../models/fortune.model';
import chai from 'chai';
let expect = chai.expect;
 describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
      expect(Fortune.getTestNum()).to.be.equal(123);
    });
  });