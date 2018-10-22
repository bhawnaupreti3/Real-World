import { TestBed } from '@angular/core/testing';

import { ReadArticleService } from './read-article.service';

describe('ReadArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadArticleService = TestBed.get(ReadArticleService);
    expect(service).toBeTruthy();
  });
});
